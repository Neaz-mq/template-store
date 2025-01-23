import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Communication = () => {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reply, setReply] = useState('');
  const [selectedReply, setSelectedReply] = useState(null);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/replies'); // Fetch all replies
        setReplies(response.data);
      } catch (err) {
        setError('Failed to fetch replies');
        toast.error('Failed to fetch replies', { position: 'top-center' });
      } finally {
        setLoading(false);
      }
    };

    fetchReplies();
  }, []);

  const handleReplySubmit = async (messageId) => {
    try {
      const email = 'admin@example.com'; // Replace with dynamic admin email if needed
      await axios.post('http://localhost:5000/replies', {
        messageId, // Send the correct `messageId` field
        reply,
        email,
      });
      toast.success('Reply sent successfully', { position: 'top-center' });

      // Update replies list locally after successful submission
      setReplies((prevReplies) =>
        prevReplies.map((r) =>
          r._id === messageId
            ? { ...r, reply } // Update the reply for the selected message
            : r
        )
      );

      setReply('');
      setSelectedReply(null);
    } catch (err) {
      console.error('Failed to send reply:', err.message);
      toast.error('Failed to send reply', { position: 'top-center' });
    }
  };

  if (loading) return <p>Loading replies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Communication - All Replies</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th> {/* Added Role column */}
            <th className="border border-gray-300 px-4 py-2">Reply</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {replies.map((rep) => (
            <tr key={rep._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{rep.email}</td>
              <td className="border border-gray-300 px-4 py-2">{rep.role}</td> {/* Display Role */}
              <td className="border border-gray-300 px-4 py-2">{rep.reply}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(rep.timestamp).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {selectedReply === rep._id ? (
                  <div>
                    <input
                      type="text"
                      className="border px-2 py-1 mr-2"
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your reply"
                    />
                    <button
                      onClick={() => handleReplySubmit(rep._id)}
                      className="bg-blue-500 text-white px-4 py-1 rounded"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => setSelectedReply(null)}
                      className="bg-gray-300 text-black px-4 py-1 rounded ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedReply(rep._id)}
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeButton={false}
      />
    </div>
  );
};

export default Communication;
