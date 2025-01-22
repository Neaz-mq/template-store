import React, { useEffect, useState, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../../providers/AuthProvider";

const socket = io("http://localhost:5000", {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
});

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef(null);
  const { user } = useContext(AuthContext); // Access user context

  useEffect(() => {
    if (!user) {
      setChat([]);
      return;
    }

    const fetchMessagesAndReplies = async () => {
      setLoading(true);
      try {
        // Fetch user-specific messages
        const messagesResponse = await fetch(
          `http://localhost:5000/messages?email=${user.email}`
        );
        if (!messagesResponse.ok) throw new Error("Failed to fetch messages");
        const messages = await messagesResponse.json();
    
        // Fetch all replies for the admin email
        const repliesResponse = await fetch(
          `http://localhost:5000/replies?email=neazmorshed666@gmail.com`
        );
        if (!repliesResponse.ok) throw new Error("Failed to fetch replies");
        const allReplies = await repliesResponse.json();
    
        // Merge messages with their respective replies
        const combinedChat = messages.map((message) => ({
          ...message,
          replies: allReplies.filter((reply) => reply.messageId === message._id),
        }));
    
        setChat(combinedChat);
      } catch (error) {
        console.error("Error fetching messages and replies:", error);
      } finally {
        setLoading(false);
      }
    };

    socket.connect();
    fetchMessagesAndReplies();

    socket.on("receiveMessage", (data) => {
      if (data.user?.email === user.email) {
        setChat((prevChat) => [...prevChat, { ...data, replies: [] }]);
      }
    });

    return () => {
      socket.off("receiveMessage");
      socket.disconnect();
    };
  }, [user]);

  // Handle sending messages
  const handleSendMessage = async () => {
    if (!message.trim()) return;
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

      setChat((prevChat) => [...prevChat, { ...messageData, replies: [] }]);
      setMessage(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Auto-scroll to the latest message
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
      {/* Floating Chat Bubble Icon */}
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
          <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14V4a2 2 0 00-2-2z" />
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
                <div key={index}>
                  <div
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

                  {/* Display replies */}
                  {msg.replies.length > 0 &&
                    msg.replies.map((reply, idx) => (
                      <div
                        key={idx}
                        className="reply-message p-2 ml-6 mb-3 rounded-lg bg-gray-100 text-black shadow-sm"
                      >
                        <p>{reply.reply}</p>
                        <small className="text-gray-500">
                          {reply.email} • {new Date(reply.timestamp).toLocaleString()}
                        </small>
                      </div>
                    ))}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}

          {/* Input Field and Send Button */}
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
              disabled={!message.trim()}
              className={`ml-2 p-3 rounded-full shadow-md transition duration-300 ${
                message.trim()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
