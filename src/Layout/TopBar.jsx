import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import socket from "../utils/socket"; // Corrected import for the socket instance

const TopBar = () => {
    const { user } = useAuth(); // Accessing the user context
    const [notifications, setNotifications] = useState(0); // Track the number of unread notifications
    const [latestMessage, setLatestMessage] = useState(null); // Store the most recent message

    useEffect(() => {
        if (user?.role === 'admin') {
            socket.emit('joinAdmin'); // Notify the server that the admin has joined
        }
    }, [user])

    const handleBellClick = () => {
        if (notifications > 0) {
            setNotifications(0); // Reset notification count on bell click
        }
        // Optional: Redirect to a notifications/messages page if required
    };

    return (
        <div>
            <div className="flex items-center justify-between -mt-3 -mb-2">
                {/* Left Section: Logo and Search */}
                <div className="flex items-center">
                    <Link to="/dashboard/adminHome" className="text-xl mt-7 ml-4 mr-3 mb-8">
                        <img
                            src="/Logo_Prographr_Color.svg"
                            alt="Logo"
                            className="md:ml-24 md:mr-2 ml-2 w-36 h-auto -mt-8 md:-mt-0"
                        />
                    </Link>
                    <div className="relative md:ml-[5.54rem]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 md:pr-4 md:py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-none mt-4"
                        />
                        <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                            <svg
                                className="h-4 w-4 text-gray-500 mt-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Right Section: Notifications and Profile */}
                <div className="md:flex items-center justify-between -mt-3 p-3 md:mr-7">
                    <div className="flex items-center mr-6 mt-3 relative">
                        <FaBell
                            className="text-gray-500 mr-2 text-xl cursor-pointer"
                            onClick={handleBellClick} // Reset notifications on bell click
                        />
                        {notifications > 0 && (
                            <span className="absolute top-0 right-0 block w-3 h-3 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                {notifications}
                            </span>
                        )}
                        <span className="font-semibold text-gray-700 ml-4">{user?.displayName || 'Admin'}</span>
                        <div className="ml-4 md:h-8 h-6 md:w-8 w-9 bg-[#4864EC] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Display Latest Message */}
            {latestMessage && (
                <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-blue-100 p-3 rounded-lg shadow-lg">
                    <p className="font-semibold">{latestMessage.email}</p>
                    <p>{latestMessage.message}</p>
                    <span className="text-sm text-gray-500">
                        {new Date(latestMessage.timestamp).toLocaleString()}
                    </span>
                </div>
            )}
        </div>
    );
};

export default TopBar;
