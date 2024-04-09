import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const SearchBox = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async ()=>{
    const q = query(collection(db, "users"), where("fullname", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data())
        console.log(doc.data())
        
      });
    } catch (error) {
      setErr(true)
      console.log(error)
    }
  }
  
  const handleKey = (e)=>{
    e.code === "Enter" && handleSearch()
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
    {user && (
      <div className="flex items-center cursor-pointer justify-start gap-2 border-b-2 border-gray-700 px-4 py-2 hover:bg-gray-900">
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
