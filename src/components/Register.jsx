import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoImage = e.target.photo.files[0];

    try {
      // creating the userAuth
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // uploading th image
      const storageRef = ref(storage, `users/${fullname}`);

      const uploadTask = uploadBytesResumable(storageRef, photoImage);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update the user profile
            await updateProfile(res.user, {
              displayName: fullname,
              photoURL: downloadURL,
            });

            // adding th user to new collection called User
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              fullname,
              email,
              photoURL: downloadURL,
            });

            // creat the user chat collection
            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );
      navigate("/login");
      toast.success("Registration Successfull", { theme: "dark" });
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-800 w-[350px] px-[35px] py-[40px] rounded-lg border-2 border-gray-700">
      <h1 className="text-2xl text-center font-bold tracking-wider mb-4">
        Register
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
        <input
          type="text"
          name="fullname"
          placeholder="Displayed Name"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <input
          type="file"
          name="photo"
          className="p-2 border-b-2 border-gray-600 bg-gray-800 focus:outline-none focus:outline-rose-500 focus:rounded-lg"
        />
        <button className="bg-rose-500 p-2 rounded-lg font-bold cursor-pointer text-white">
          {isLoading ? "Submiting..." : "Sign Up"}
        </button>
        {error && <span className="text-red-500">Something went wrong...</span>}
        <span>
          Your already have an account{" "}
          <Link to="/login" className="text-primary font-bold">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
