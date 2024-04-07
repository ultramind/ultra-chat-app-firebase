import data from "../constant/data";
import NavBar from "./NavBar";
import User from "./User";
import PowerIcon from "./icons/PowerIcon";
function Users() {
  const { userProfile } = data;
  return (
    <div className="w-[30%] border-r-2 border-gray-700 h-full">
      {/* header */}
      <NavBar />
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
