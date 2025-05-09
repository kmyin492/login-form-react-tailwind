import './App.css'

import { useState } from "react";
import { Eye, EyeOff ,User ,Lock } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const showData = () => {
    console.log(username);
    console.log(password);
    }
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-4xl shadow-lg w-100">
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
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 active:bg-green-700 transition duration-200"
          onClick={showData}>
          Login
          </button>
        
      </div>
    </div>
  );
}