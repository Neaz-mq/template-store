import React, { useEffect, useState, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../../providers/AuthProvider";

const socket = io("http://localhost:5000", {
  autoConnect: false, // Prevent auto-connection
});

const Inbox = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat visibility
  const chatEndRef = useRef(null);
  const { user } = useContext(AuthContext); // Access user context

  // Fetch messages every time the component mounts or the user changes
  useEffect(() => {
    if (!user) {
      setChat([]); // Clear messages if no user
      return;
    }

    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/messages?email=${user.email}`);
        if (!response.ok) throw new Error("Failed to fetch messages");
        const messages = await response.json();
        setChat(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    // Connect socket and fetch messages
    socket.connect();
    fetchMessages();

    // Listen for incoming messages
    socket.on("receiveMessage", (data) => {
      // Only append the message if it is not from the logged-in user
      if (data.user?.email !== user.email) {
        setChat((prevChat) => [...prevChat, data]);
      }
    });

    return () => {
      socket.off("receiveMessage");
      socket.disconnect(); // Disconnect socket on unmount
    };
  }, [user]);

  // Handle sending messages
  const handleSendMessage = async () => {
    if (!message.trim()) return; // Prevent empty messages
    if (!user) {
      console.error("User must be logged in to send messages.");
      return;
    }

    const messageData = {
      user: { email: user.email },
      message: message.trim(),
      timestamp: new Date(),
    };

    try {
      // Add the message to the chat immediately
      setChat((prevChat) => [...prevChat, messageData]);

      // Send the message to the server
      await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      // Emit the message through socket to other users
      socket.emit("sendMessage", messageData);
      setMessage(""); // Clear the message input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  if (!user) {
    return (
      <div className="text-center text-gray-500">
        Please log in to access the chat.
      </div>
    );
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <div
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full p-4 shadow-xl cursor-pointer flex items-center justify-center w-14 h-14"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            d="M12 3C6.48 3 2 6.82 2 11.5c0 2.56 1.4 4.84 3.62 6.38L4.07 20.93c-.1.37.29.7.65.48l3.44-2.06C9.43 19.65 10.71 20 12 20c5.52 0 10-3.82 10-8.5S17.52 3 12 3zm0 15c-1.02 0-2.02-.23-2.93-.68-.23-.11-.5-.09-.72.05l-2.42 1.45.83-2.9c.07-.24 0-.5-.18-.68C5.27 14.21 4 12.06 4 11.5 4 7.36 7.79 4 12 4s8 3.36 8 7.5-3.79 7.5-8 7.5zm-2-8h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4z"
          />
        </svg>
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-5 max-w-sm w-full bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-4">Inbox</h1>

          {loading ? (
            <div className="text-center text-gray-500">Loading messages...</div>
          ) : (
            <div className="chat-log h-60 overflow-auto mb-4 p-2 border-b border-gray-200">
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message p-3 mb-3 rounded-lg shadow-sm ${
                    msg.user?.email === user.email
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200 text-black mr-auto"
                  }`}
                >
                  <p className="mt-2">{msg.message}</p>
                  <small className="text-black">
                    {new Date(msg.timestamp).toLocaleString()}
                  </small>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}

          <div className="flex items-center mt-4 border-t border-gray-200 pt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
