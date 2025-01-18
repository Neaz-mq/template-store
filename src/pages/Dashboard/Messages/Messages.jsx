import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reply, setReply] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages'); // Fetch all messages
        setMessages(response.data);
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleReplySubmit = async (messageId) => {
    try {
      await axios.post('http://localhost:5000/reply', {
        messageId,
        reply,
      });
      alert('Reply sent successfully');
      setReply('');
      setSelectedMessage(null); // Reset selected message
    } catch (err) {
      console.error('Failed to send reply:', err.message);
      alert('Failed to send reply');
    }
  };

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">All Messages</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{msg.email}</td>
              <td className="border border-gray-300 px-4 py-2">{msg.message}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(msg.timestamp).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {selectedMessage === msg._id ? (
                  <div>
                    <input
                      type="text"
                      className="border px-2 py-1 mr-2"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your reply"
                    />
                    <button
                      onClick={() => handleReplySubmit(msg._id)}
                      className="bg-blue-500 text-white px-4 py-1 rounded"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="bg-gray-300 text-black px-4 py-1 rounded ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedMessage(msg._id)}
                    className="bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Reply
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
