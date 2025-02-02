import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaUserCircle, FaCommentDots, FaTimes } from "react-icons/fa";
import axios from "axios";

const UserHome = () => {
  const { user } = useAuth();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages from backend
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/get-messages/${user.email}`)
        .then((res) => setMessages(res.data.data))
        .catch((err) => console.error("Error fetching messages:", err));
    }
  }, [user?.email]); // Fetch messages only when user email changes
  

  // Send message to backend
  const sendMessage = async () => {
    if (!newMessage.trim()) return;
  
    // Include role from the logged-in user
    const messageData = {
      message: newMessage,
      email: user?.email, // Ensure email is sent
      senderId: user?.uid,
    };
  
    try {
      // Send message data to the backend, which will include the role and receiverIds for admins
      await axios.post("http://localhost:5000/send-message", messageData);
      setMessages([...messages, { ...messageData, timestamp: new Date() }]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-6 relative">
      <Helmet>
        <title>Prographr | User Dashboard</title>
        <meta name="description" content={`Welcome ${user?.displayName || "back"} to Prographr! Discover templates for creative projects and more.`} />
        <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
        <link rel="canonical" href="https://www.prographr.com/user" />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-md text-center -mt-24">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={`${user.displayName || "User"}'s profile`}
            className="w-20 h-20 rounded-full shadow-md border-4 border-indigo-300"
          />
        ) : (
          <FaUserCircle className="text-gray-400 text-7xl mb-4" />
        )}
        <h2 className="text-3xl font-extrabold text-gray-800 mt-4">
          {user?.displayName || "User"}!
        </h2>
        <p className="text-gray-600 mt-2">Explore your dashboard and manage your account here.</p>
        <a href="/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition">
            Go to Home
          </motion.button>
        </a>
      </motion.div>

      {!isChatOpen ? (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 bg-indigo-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition"
          onClick={() => setIsChatOpen(true)}
        >
          <FaCommentDots className="text-3xl" />
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 w-80 bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col"
        >
          <div className="flex justify-between items-center bg-indigo-500 text-white px-4 py-3 rounded-t-xl">
            <span className="font-semibold">Live Chat</span>
            <FaTimes 
              className="cursor-pointer text-xl hover:text-gray-200 transition" 
              onClick={() => setIsChatOpen(false)}
            />
          </div>

          <div className="p-4 h-60 overflow-y-auto text-gray-700">
            {messages.length === 0 ? (
              <p className="text-sm text-center text-gray-400">Start a conversation...</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-lg mb-2 ${msg.email === user?.email ? "bg-blue-500 text-white ml-auto" : "bg-gray-200"}`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              ))
            )}
          </div>

          <div className="p-2 border-t flex items-center">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full px-3 py-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button 
              className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserHome;
