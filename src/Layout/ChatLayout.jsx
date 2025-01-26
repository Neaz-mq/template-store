import NoChatSelected from "../pages/NoChatSelected/NoChatSelected";
import Sidebar from "./SideBar";

const ChatLayout = () => {
    return (
        <div className="flex h-screen bg-base-200 -mt-4">
            {/* Sidebar on the left */}
            <Sidebar />

            {/* NoChatSelected on the right */}
            <div className="flex-1">
                <NoChatSelected />
            </div>
        </div>
    );
};

export default ChatLayout;
