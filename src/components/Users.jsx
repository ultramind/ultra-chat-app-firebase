import data from "../constant/data";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import User from "./User";
import PowerIcon from "./icons/PowerIcon";
function Users() {
  const { userProfile } = data;
  return (
    <div className="w-[30%] border-r-2 border-gray-700 h-full">
      {/* header */}
      <NavBar />
      {/* search */}
      <SearchBox />
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
