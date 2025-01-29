import { useState } from "react";
import Sidebar from "./SideBar";
import NoChatSelected from "../pages/NoChatSelected/NoChatSelected";
import ChatContainer from "../pages/ChatContainer/ChatContainer";


const ChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen bg-base-200 lg:-mt-4">
      <Sidebar onSelectUser={setSelectedUser} />
      <div className="flex-1">
        {selectedUser ? (
          <ChatContainer selectedUser={selectedUser} />
        ) : (
          <NoChatSelected />
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
