import Chat from "./Users";
import MessageContainer from "./MessageContainer";

function ChatApp() {
  return (
    <div className="flex bg-gray-800 w-[70%] h-[80vh] rounded-lg border-2 border-gray-700">
      {/* ChatApp */}
      <Chat />
      {/* messages */}
      <MessageContainer />
    </div>
  );
}

export default ChatApp;
