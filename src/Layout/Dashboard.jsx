import { FaHome, FaList, FaShoppingCart, FaAlignLeft } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import TopBar from "./TopBar";
import { BiSolidCategory } from "react-icons/bi";
import { AiOutlineUpload, AiTwotoneAppstore } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { LiaUserCogSolid } from "react-icons/lia";
import { GrHomeRounded } from "react-icons/gr";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const adminLinks = [
        { to: "/dashboard/adminHome", icon: <BiSolidCategory />, label: "Admin Home" },
        { to: "/dashboard/uploadTemplates", icon: <AiOutlineUpload />, label: "Upload Templates" },
        { to: "/dashboard/manageTemplates", icon: <FaList />, label: "Manage Templates" },
        { to: "/dashboard/uploadFreeTemplates", icon: <AiOutlineUpload />, label: "Upload Free Templates" },
        { to: "/dashboard/manageFreeTemplates", icon: <FaList />, label: "Manage Free Templates" },
        { to: "/dashboard/uploadExclusiveTemplates", icon: <AiOutlineUpload />, label: "Upload Exclusive" },
        { to: "/dashboard/manageExclusiveTemplates", icon: <FaList />, label: "Manage Exclusive" },
        { to: "/dashboard/uploadBanner", icon: <AiOutlineUpload />, label: "Upload Banner" },
        { to: "/dashboard/manageBanner", icon: <FaList />, label: "Manage Banner" },
        { to: "/dashboard/users", icon: <LuUser2 />, label: "Users" },
        { to: "/dashboard/admins", icon: <LiaUserCogSolid />, label: "Admins" },
        { to: "/dashboard/paymentsHistory", icon: <FaAlignLeft />, label: "Payment History" },          
        { to: "/dashboard/picture", icon: <FaAlignLeft />, label: "Picture" },          
    ];

    const userLinks = [
        { to: "/dashboard/userHome", icon: <FaHome />, label: "User Home" },
        { to: "/dashboard/cart", icon: <FaShoppingCart />, label: `My Cart (${cart.length})` },
        { to: "/dashboard/paymentHistory", icon: <FaList />, label: "Payment History" },     
    ];

    const sharedLinks = [
        { to: "/", icon: <GrHomeRounded />, label: "Home" },
        { to: "/template", icon: <AiTwotoneAppstore />, label: "Template" },
    ];

    return (
        <div className="font-raleway">
            <TopBar />
            <div className="flex min-h-screen bg-[#F3F4F6]">
                <div className={`md:w-64 w-48 min-h-screen  bg-white text-black flex flex-col md:ml-20 shadow-lg -mt-0.4`}>
                    <ul className="flex-1 p-4 space-y-2 mt-2">
                        {isAdmin
                            ? adminLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center space-x-2 p-2 hover:bg-[#4864EC] hover:text-[#ffffff] relative ${isActive ? 'border-l-4 border-blue-600 pl-4 -ml-4' : ''
                                            }`
                                        }
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </NavLink>
                                </li>
                            ))
                            : userLinks.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center space-x-2 p-2 hover:bg-[#4864EC] hover:text-[#ffffff] relative ${isActive ? 'border-l-4 border-blue-500 pl-4 -ml-4' : ''
                                            }`
                                        }
                                    >
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="p-4 space-y-2">
                        <div className="divider md:-mt-56"></div>
                        {sharedLinks.map(link => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-2 p-2 rounded-md hover:bg-[#4864EC] hover:text-[#ffffff] relative ${isActive ? 'border-l-4 border-blue-500 pl-4 -ml-4' : ''
                                        }`
                                    }
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
