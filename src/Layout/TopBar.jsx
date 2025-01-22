import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import socket from "../utils/socket"; // Corrected import for socket instance
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const TopBar = () => {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState(0); // Notifications for bell icon
    const [notificationCount, setNotificationCount] = useState(0); // Notifications for chat bubble
    const [messages, setMessages] = useState([]); // Store fetched messages

    // Fetch messages when the component mounts or when user changes
    useEffect(() => {
        const fetchMessages = async () => {
            if (user) {
                try {
                    const response = await fetch(`http://localhost:5000/messages?email=${user.email}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch messages");
                    }
                    const data = await response.json();
                    setMessages(data); // Update state with fetched messages
                    setNotifications(data.length); // Set notification count to the number of messages
                } catch (error) {
                    console.error("Error fetching messages:", error);
                }
            }
        };

        fetchMessages();
    }, [user]); // Fetch messages whenever user changes

    // Listen for new messages to update notification counts
    useEffect(() => {
        if (user?.role === 'admin') {
            socket.on("notifyNewMessage", (data) => {
                console.log(data.message);  // Log the received message for debugging
                setNotifications((prev) => prev + 1); // Increment bell notifications
            });

            socket.on("notifyNewChatMessage", (data) => {
                setNotificationCount((prev) => prev + 1); // Increment chat bubble notifications
            });

            return () => {
                socket.off("notifyNewMessage"); // Cleanup
                socket.off("notifyNewChatMessage"); // Cleanup
            };
        }
    }, [user]);

    return (
        <div>
            <div className="flex items-center justify-between -mt-3 -mb-2">
                <div className="flex items-center">
                    <div className="md:relative">
                        <Link to="/dashboard/adminHome" className="text-xl mt-7 ml-4 mr-3 mb-8">
                            <img
                                src="/Logo_Prographr_Color.svg"
                                alt="Logo"
                                className="md:ml-24 md:mr-2 ml-2 w-36 h-auto -mt-8 md:-mt-0"
                            />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="md:border-l md:border-gray-200 md:pl-8 md:ml-[5.54rem] md:h-16 mt-16 md:mt-0 -ml-20 pb-5 md:pb-0">
                            <div className="relative">
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
                    </div>
                </div>

                <div className="md:flex items-center justify-between -mt-3 p-3 md:mr-7">
                    <div className="flex items-center mr-6 mt-3 relative">
                        <FaBell className="text-gray-500 mr-2 text-2xl" />
                        {notifications > 0 && (
                            <span className="absolute top-0 right-44 block w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                +{notifications}
                            </span>
                        )}
                        <span className="font-semibold text-gray-700 ml-4">{user?.displayName || 'Admin'}</span>
                        <div className="ml-4 md:h-8 h-6 md:w-8 w-16 bg-[#4864EC] rounded-full"></div>
                    </div>
                </div>
            </div>

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
                {notificationCount > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full">
                        +{notificationCount}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBar;
