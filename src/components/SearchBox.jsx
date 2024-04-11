import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const SearchBox = () => {
  const {currentUser} = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  // console.log(user)
  const [err, setErr] = useState(false)

  const handleSearch = async ()=>{
    const q = query(collection(db, "users"), where("fullname", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      setErr(true)
      // console.log(error)
    }
  }
  
  const handleKey = (e)=>{
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async ()=>{
    console.log("clicked")
    // if the user exits or have chats
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid+currentUser.uid;
   
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        

        // create user chat
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            fullname:user.fullname,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })

        // create the second user chat
        await updateDoc(doc(db,"userChats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            fullname:currentUser.displayName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })

        // create a new chat in chat collection
        await setDoc(doc(db,"chats", combinedId), {messages:[]});
        
      }
    } catch (error) {
      setErr(true)
      console.log(error)
    }
    console.log("Added to User chat")
    setUser(null)
    setUsername("")
    
  }
  return (
    <>
    <div className=" w-full border-b-2 border-b-forground">
      <input
        type="text"
        placeholder="Find users"
        value={username}
        onKeyDown={handleKey}
        onChange={(e)=>setUsername(e.target.value)}
        className="w-full bg-transparent py-2 px-4 focus:outline-none"
      />
    </div>
    {!user && err && <span>No user found...</span>}
    {user && (
      <div onClick={handleSelect} className="flex items-center cursor-pointer justify-start gap-2 border-b-2 border-gray-700 px-4 py-2 hover:bg-gray-900">
      <img src={user.photoUrl} className="w-8 h-8 rounded-full" alt="" />
      <div className="flex flex-col">
        <span className="font-bold">{user.fullname}</span>
        <small className="text-gray-500">Last msg here...</small>
      </div>
    </div>
    )}
    </>
  );
};

export default SearchBox;
