import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toast.success("welcome back", { theme: "dark" });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="bg-gray-800 w-[350px] px-[35px] py-[40px] rounded-lg border-2 border-gray-700">
      <h1 className="text-2xl text-center font-bold tracking-wider mb-4">
        Login.
      </h1>
      <span>Fill in the fields...</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <button className="bg-rose-500 p-2 rounded-lg font-bold cursor-pointer text-white">
          {isLoading ? "Signing..." : "Sign In"}
        </button>
        {error && <span className="text-red-500">Something went wrong...</span>}
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
