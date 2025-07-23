import { FaBell } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const TopBar = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="flex items-center justify-between -mt-3 -mb-2">
                <div className="flex items-center">
                    <div className="md:relative">
                        <Link to="/dashboard/adminHome" className="text-xl mt-7 ml-4 mr-3 mb-8">
                            <img
                                src="/Logo_Prographr_Black.svg"
                                alt="Logo"
                                className="md:ml-24 md:mr-2 ml-8 w-36 h-auto -mt-8 md:-mt-0"
                            />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="md:border-l md:border-gray-200 md:pl-8 md:ml-[5.54rem] md:h-16 mt-16 md:mt-0 -ml-20 pb-5 md:pb-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-8 md:pr-4 md:py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-none mt-4 ml-6 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 tablet:ml-0"
                                />
                                <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                    <svg
                                        className="h-4 w-4 text-gray-500 mt-4 ml-6 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 tablet:ml-0"
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
                        <FaBell className="text-[#282A37] text-2xl" />
                        <span className="font-semibold text-gray-700 ml-4">{user?.displayName || "Admin"}</span>
                        <a href="/"><div className="ml-4 md:h-8 h-6 md:w-8 w-6 bg-[#282A37] rounded-full"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;