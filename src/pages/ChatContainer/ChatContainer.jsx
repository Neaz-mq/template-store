import ChatHeader from "../ChatHeader/ChatHeader";
import MessageInput from "../MessageInput/MessageInput";

const ChatContainer = () => {
  
  return (
    <div>
    <ChatHeader></ChatHeader>
    <p>Messages...</p>
    <MessageInput></MessageInput>
    </div>
  );
};

export default ChatContainer;