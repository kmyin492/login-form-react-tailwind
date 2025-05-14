import './App.css'

import { useState } from "react";
import { Eye, EyeOff ,User ,Lock } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const nav =useNavigate();
    
  const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

 const handleLogin = async () => {
  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  try {
    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      localStorage.setItem("userId", data.userId); // optional
       localStorage.setItem("username", data.username); // ✅ username သိမ်းမယ်
       console.log(data);
      nav("/home");
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server error. Try again.");
    console.error(err);
  }
  
  
};
    

  return (
    <div className="  flex min-h-screen items-center justify-center bg-gradient-to-b from-gay-100 to-green-500"> 
    {/* //bg-[url('/login.jpg')] bg-cover bg-center */}
      <div className='w-1/2 hidden md:flex'> 
        <img
          src="/login.png"
          alt="Logo"
          className=""
          // "w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
        />
      </div>
      <div className=" md:w-1/2  flex min-h-screen items-center justify-center ">
      <div className=" backdrop-blur-md border-t-1  border-gray-800  p-8 rounded-4xl shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

       <div className="mb-4 relative">
  <label className="block text-black mb-1">Username</label>
  <User size={18} className="absolute left-3 top-10 text-gray-500" />
  <input
    onChange={(e) => setUsername(e.target.value)}
  
    type="text"
    className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-0 focus:border-green-500"
    placeholder="Enter username"
  />
</div>

        <div className="mb-12 relative">
          <label className="block text-black mb-1">Password</label>
          <Lock size={18} className="absolute left-2 top-10  text-gray-500"/>
          <input
          onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className="pl-10 w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-green-500 pr-10"
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-10 text-gray-500"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 active:bg-green-700 transition duration-200"
          onClick={handleLogin}>
          Login
          </button>
        
      </div>
      </div>
    </div>
  );
}