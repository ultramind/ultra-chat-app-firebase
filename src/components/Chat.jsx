import { useContext } from "react";
import data from "../constant/data";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const Chat = ({message}) => {
  console.log(message)
  const {data} = useContext(ChatContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="flex flex-col px-4 py-2">
      <div className={`flex cursor-pointer justify-start gap-4 ${message.senderId === currentUser.uid && 'owner'}`}>
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} className="w-8 h-8 rounded-full" alt="" />
        <div className="w-fit flex flex-col gap-0 p-2 bg-gray-100 rounded-tr-lg rounded-bl-lg text-bgColor">
          <p className="">{message.text}</p>

          {/* <img src={postImg} alt="Chat_img" /> */}
          <small className="text-gray-400 text-xs">1023 am</small>
        </div>
      </div>
    </div>
  );
};

export default Chat;
