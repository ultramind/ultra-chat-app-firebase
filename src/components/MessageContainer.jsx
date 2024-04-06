import VideoIcon from "./icons/VideoIcon";
import UserPlusIcon from "./icons/UserPlusIcon";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function MessageContainer() {
  return (
    <div className="w-[70%] h-full">
      {/* // Title */}
      <div className="w-full bg-gray-800 p-4 flex items-center justify-between rounded-tr-lg">
        <span>Akachukwu</span>
        <div className="flex items-center justify-between gap-4">
          <button className="text-xs w-4">
            <VideoIcon />
          </button>
          <button className="stroke-1">
            <UserPlusIcon />
          </button>
        </div>
      </div>
      {/* Messages */}
      <Messages />
      <ChatInput />
    </div>
  );
}

export default MessageContainer;
