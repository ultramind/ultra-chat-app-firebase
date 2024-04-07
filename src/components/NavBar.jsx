import React from "react";
import PowerIcon from "./icons/PowerIcon";
import data from "../constant/data";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const { userProfile } = data;

  return (
    <div className="w-full  bg-gray-900 px-2 py-3 flex items-center rounded-tl-lg  justify-between border-b-2 border-forground">
      <span className="text-xl font-extrabold text-primary">UltraChat</span>
      <div className="flex items-center justify-between gap-2 border-l-2 border-gray-700 pl-4">
        <img src={userProfile} className="w-8 h-8 rounded-full" alt="" />
        <span>Akachukwu</span>
        <button onClick={() => signOut(auth)} className="text-xs">
          <PowerIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
