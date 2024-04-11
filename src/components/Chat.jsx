import data from "../constant/data";

const Chat = () => {
  const { userProfile } = data;
  return (
    <div className="flex flex-col px-4 py-2">
      <div className="flex cursor-pointer justify-start gap-4 owne">
        <img src={userProfile} className="w-8 h-8 rounded-full" alt="" />
        <div className="w-fit flex flex-col gap-0 p-2 bg-gray-100 rounded-tr-lg rounded-bl-lg text-bgColor">
          <p className="">Pleas i want to learn ReactJS</p>

          {/* <img src={postImg} alt="Chat_img" /> */}
          <small className="text-gray-400 text-xs">10:23 am</small>
        </div>
      </div>
    </div>
  );
};

export default Chat;
