import VideoIcon from "./icons/VideoIcon";
import UserPlusIcon from "./icons/UserPlusIcon";
import ChatInput from "./ChatInput";
import Chats from "./Chats";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function ChatContainer() {
  const {data} = useContext(ChatContext)
  return (
    <div className="w-[70%] relative h-full">
      {/* // Title */}
      <div className="w-full bg-gray-800 p-4 flex items-center justify-between rounded-tr-lg">
        <span>{data.user?.fullname}</span>
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
      <Chats />
      <ChatInput />
    </div>
  );
}

export default ChatContainer;
