import { useContext, useState } from "react";
import AttarchmentIcon from "./icons/AttarchmentIcon";
import ImageIcon from "./icons/ImageIcon";
import SendIcon from "./icons/SendIcon";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {v4 as uuid} from "uuid"
import { db, storage } from "../firebase";
import { ref } from "firebase/storage";

const ChatInput = () => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext);

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleSend = async ()=>{
    if (img) {
      const storageRef = ref(storage, `chats/`+uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          // setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // add chat to db
            await updateDoc(doc(db,"chats", data.chatId), {
              messages: arrayUnion({
                id:uuid(),
                text,
                img:downloadURL,
                senderId:currentUser.uid,
                date:Timestamp.now()
              })
            })
            
          });
        }
      );
    }else{
      await updateDoc(doc(db,"chats", data.chatId), {
        messages: arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date:Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]:serverTimestamp()
    })

    // adding the last chat
    await updateDoc(doc(db, "userChats", data.user.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]:serverTimestamp()
    })
    setImg(null)
    setText("")
    console.log("msg sent")
  }
  return (
    <div className="bg-primary absolute bottom-0 w-[100%] text-white font-bold h-[9.5%] flex items-center gap-3 p-2 pr-4">
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type Something..."
        className="bg-transparent flex-1 p-2 focus:outline-none placeholder:text-white"
      />
      <input type="file" id="image" className="hidden" onChange={e=>setImg(e.target.files[0])} />
      <label className="cursor-pointer" htmlFor="image"><ImageIcon /></label>
      <button className="text-xs w-4">
        <AttarchmentIcon />
      </button>
      {/* <button className="stroke-1">
        <ImageIcon />
      </button> */}
      <button onClick={handleSend} className="text-xs w-4">
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatInput;
