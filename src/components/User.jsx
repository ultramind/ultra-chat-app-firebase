import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function User({userData}) {
  const {dispatch} = useContext(ChatContext)
  const handleChange = (u)=>{
    dispatch({type:"SET_ACTIVE_USER", payload:u})
  }
  return (
    <div onClick={()=>handleChange(userData.userInfo)} className="flex items-center cursor-pointer justify-start gap-2 border-b-2 border-gray-700 px-4 py-2 hover:bg-gray-900">
      <img src={userData.userInfo.photoURL} className="w-8 h-8 rounded-full" alt="" />
      <div className="flex flex-col gap-0">
        <span className="font-bold">{userData.userInfo.fullname}</span>
        <small className="text-gray-500">{userData.lastMessage?.text}</small>
      </div>
    </div>
  );
}

export default User;
