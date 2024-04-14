import { useContext, useEffect, useState } from "react";
import Chat from "./Chat";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

function Chats() {
  const {data} = useContext(ChatContext)
  const [messages, setMessages] = useState([])


  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return ()=> {
      unsub()
    }
  }, [data.chatId])


  return (
    <div className="w-full p-4 bg-gray-600 h-[85%] overflow-y-scroll border-t-2 border-forground overy">
      {messages.map((msg,i)=>(
        <Chat key={i} message={msg}/>
      ))}
    </div>
  );
}

export default Chats;
