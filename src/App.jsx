import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ChatApp from "./components/ChatApp";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/">
          <Route index element={<ChatApp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
