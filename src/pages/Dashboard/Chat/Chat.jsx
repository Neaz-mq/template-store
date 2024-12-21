import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

// Initialize the socket connection
const socket = io("http://localhost:5000"); // Replace with your backend URL

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null); // Ref to scroll to the last message

  // Function to handle notifications
  const notifyNewMessage = (message) => {
    if (Notification.permission === "granted") {
      new Notification("New message", {
        body: `${message.user}: ${message.message}`,
      });
    }
  };

  // Fetch messages from the database when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/messages"); // Replace with your API endpoint
        if (response.ok) {
          const messages = await response.json();
          setChat(messages); // Set the chat history with fetched messages
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    // Request permission for notifications (if not granted already)
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    // Listen for incoming messages
    socket.on("receiveMessage", (data) => {
      setChat((prevChat) => [...prevChat, data]);
      if (data.user !== "Admin") {
        notifyNewMessage(data); // Notify when a new message arrives from the user
      }
    });

    // Cleanup on component unmount
    return () => {
      socket.off("receiveMessage");
      socket.disconnect(); // Ensure the socket disconnects properly
    };
  }, []);

  const handleSendMessage = () => {
    const messageData = {
      user: "Admin", // Admin as the sender
      message,
      timestamp: new Date(),
    };

    socket.emit("sendMessage", messageData); // Send message to the user
    setChat((prevChat) => [...prevChat, messageData]); // Add admin's message to chat history
    setMessage(""); // Clear the input field
  };

  // Scroll to the bottom when a new message is received or sent
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="admin-chat max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Admin Chat</h1>

      <div className="chat-log h-96 overflow-auto mb-4 p-2 border-b border-gray-200">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`chat-message p-2 mb-2 rounded-lg ${
              msg.user === "Admin" ? "bg-blue-100 text-right" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-between">
              <strong
                className={msg.user === "Admin" ? "text-blue-600" : "text-gray-600"}
              >
                {msg.user}
              </strong>
              <small className="text-gray-400">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </small>
            </div>
            <p>{msg.message}</p>
          </div>
        ))}
        <div ref={chatEndRef} /> {/* Scroll to this point */}
      </div>

      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
