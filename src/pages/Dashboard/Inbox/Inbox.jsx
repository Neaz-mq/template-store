import { useEffect, useState, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../../providers/AuthProvider";

const socket = io("http://localhost:5000", {
  autoConnect: false, // Prevent auto-connection
});

const Inbox = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);
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
      // Only append the message if it is from the logged-in user
      if (data.user?.email === user.email) {
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
      await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      socket.emit("sendMessage", messageData);
      setChat((prevChat) => [...prevChat, messageData]); // Add to chat immediately
      setMessage("");
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
    <div className="chatbox max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Inbox</h2>

      {loading ? (
        <div className="text-center text-gray-500">Loading messages...</div>
      ) : (
        <div className="chat-log h-96 overflow-auto mb-4 p-2 border border-gray-200 rounded-lg">
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
  );
};

export default Inbox;
