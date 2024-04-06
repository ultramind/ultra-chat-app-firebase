import data from "../constant/data";
function User() {
  const { userProfile } = data;
  return (
    <div className="flex items-center cursor-pointer justify-start gap-2 border-b-2 border-gray-700 px-4 py-2 hover:bg-gray-900">
      <img src={userProfile} className="w-8 h-8 rounded-full" alt="" />
      <div className="flex flex-col">
        <span className="font-bold">Akachukwu</span>
        <small className="text-gray-500">Just want to checkup...</small>
      </div>
    </div>
  );
}

export default User;
