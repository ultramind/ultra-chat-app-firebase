import data from "../constant/data";
import User from "./User";
import PowerIcon from "./icons/PowerIcon";
function Users() {
  const { userProfile } = data;
  return (
    <div className="w-[30%] border-r-2 border-gray-700 h-full">
      {/* header */}
      <div className="w-full  bg-gray-900 px-2 py-3 flex items-center rounded-tl-lg  justify-between border-b-2 border-forground">
        <span className="text-xl font-extrabold text-primary">UltraChat</span>
        <div className="flex items-center justify-between gap-2 border-l-2 border-gray-700 pl-4">
          <img src={userProfile} className="w-8 h-8 rounded-full" alt="" />
          <span>Akachukwu</span>
          <button className="text-xs">
            <PowerIcon />
          </button>
        </div>
      </div>
      {/* search */}
      <div className=" w-full border-b-2 border-b-forground">
        <input
          type="text"
          placeholder="Find users"
          className="w-full bg-transparent py-2 px-4 focus:outline-none"
        />
      </div>
      <div className="overflow-y-scroll">
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Users;
