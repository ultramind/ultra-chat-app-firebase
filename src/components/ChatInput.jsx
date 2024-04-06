import AttarchmentIcon from "./icons/AttarchmentIcon";
import ImageIcon from "./icons/ImageIcon";
import SendIcon from "./icons/SendIcon";

const ChatInput = () => {
  return (
    <div className="bg-primary text-white font-bold h-[9.5%] flex gap-3 p-2 pr-4">
      <input
        type="text"
        placeholder="Type Something..."
        className="bg-transparent flex-1 p-2 focus:outline-none placeholder:text-white"
      />
      <button className="text-xs w-4">
        <AttarchmentIcon />
      </button>
      <button className="stroke-1">
        <ImageIcon />
      </button>
      <button className="text-xs w-4">
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatInput;
