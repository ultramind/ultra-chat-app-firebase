import { useContext, useEffect, useState } from "react";
import data from "../constant/data";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import User from "./User";
import PowerIcon from "./icons/PowerIcon";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
function Users() {
  const {currentUser} = useContext(AuthContext)
  const [chatUsers, setChatUsers] = useState([])


  useEffect(() => {
    const getChatUsers = ()=>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        const unSubdata  = Object.entries(doc.data());
        setChatUsers(unSubdata)
      });

      return ()=>{
        unsub();
      }
    }

    currentUser?.uid && getChatUsers();
    console.log(chatUsers)
  }, [currentUser.uid])

  
  return (
    <div className="w-[30%] border-r-2 border-gray-700 h-full">
      {/* header */}
      <NavBar />
      {/* search */}
      <SearchBox />
      <div className="overflow-y-scroll">
        {chatUsers.map(user=>(
          <User key={user[0]} userData={user[1]} />
        ))}
        {/* <User /> */}
      </div>
    </div>
  );
}

export default Users;
