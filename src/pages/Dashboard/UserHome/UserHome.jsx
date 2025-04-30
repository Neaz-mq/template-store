import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-6 relative">
      <Helmet>
        <title>Prographr | User Dashboard</title>
      </Helmet>

      <motion.div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-md text-center -mt-24">
        {user?.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="w-20 h-20 rounded-full shadow-md border-4 border-indigo-300" />
        ) : (
          <FaUserCircle className="text-gray-400 text-7xl mb-4" />
        )}
        <h2 className="3xl:text-3xl 2xl:text-3xl desktop:text-3xl laptop:text-3xl tablet:text-3xl text-2xl font-extrabold text-gray-800 mt-4">{user?.displayName || "User"}!</h2>
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
    </div>
  );
};

export default UserHome;
