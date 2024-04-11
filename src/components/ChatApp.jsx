import Chat from "./Users";
import ChatsContainer from "./ChatsContainer";
import Users from "./Users";

function ChatApp() {
  return (
    <div className="flex bg-gray-800 w-[70%] h-[80vh] rounded-lg border-2 border-gray-700">
      {/* ChatApp */}
      <Users />
      {/* messages */}
      <ChatsContainer />
    </div>
  );
}

export default ChatApp;
