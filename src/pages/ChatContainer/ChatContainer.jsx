import { useState } from "react";
import axios from "axios";

const ChatContainer = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
  
    const messageData = {
      receiverId: selectedUser._id,            // Assuming valid selectedUser
      text: newMessage,
    };
  
    console.log("Sending message:", messageData);
  
    try {
      const response = await axios.post("http://localhost:5000/messages", messageData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
  
      console.log("Message sent successfully:", response.data);
  
      // Update UI with the new message
      setMessages((prev) => [...prev, response.data.data]);
      setNewMessage("");
    } catch (error) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
      } else {
        console.error("Error sending message:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="text-lg font-medium">{selectedUser.name}</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              msg.senderId === localStorage.getItem("userId")
                ? "bg-primary text-white self-end"
                : "bg-base-300 text-base-content self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-base-300">
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered flex-1"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
