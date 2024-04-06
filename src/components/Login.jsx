import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-800 w-[350px] px-[35px] py-[40px] rounded-lg border-2 border-gray-700">
      <h1 className="text-2xl text-center font-bold tracking-wider mb-4">
        Login.
      </h1>
      <span>Fill in the fields...</span>
      <form className="flex flex-col gap-6 mt-4">
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <button className="bg-rose-500 p-2 rounded-lg font-bold cursor-pointer text-white">
          Sign In
        </button>
        <span>
          Your do not have an account{" "}
          <Link to="/register" className="text-primary font-bold">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
