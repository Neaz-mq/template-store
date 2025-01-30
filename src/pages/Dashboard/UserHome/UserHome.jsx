import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-6">
      <Helmet>
        <title>Prographr | User Dashboard</title>
        <meta
          name="description"
          content={`Welcome ${user?.displayName || "back"} to Prographr! Discover templates for creative projects and more.`}
        />
        <meta
          name="keywords"
          content="templates, creativity, community, guidelines, ideas, testimonials"
        />
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
          {getGreeting()}, {user?.displayName || "User"}!
        </h2>

        <p className="text-gray-600 mt-2">
          Explore your dashboard and manage your account here.
        </p>

       <a href="/">
       <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition">
          Go to Home
        </motion.button></a>
      </motion.div>
    </div>
  );
};

export default UserHome;