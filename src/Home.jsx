import { useState } from "react";
import { Home, Box, Info, Phone, Menu, User, LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
   const nav =useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <Box size={20} />, label: "Products" },
    { icon: <Info size={20} />, label: "About" },
    { icon: <Phone size={20} />, label: "Contact" },
    // {icon:<}
  ];
  const username = localStorage.getItem("username") || "Guest";//get the usname from local storage

  const handleLogout = () => {
    // Logic to logout and redirect
    // window.location.href = "/";
    nav("/");
    localStorage.clear(); 
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`transition-all duration-700 bg-green-700 text-white h-screen p-4 relative flex flex-col items-center justify-between ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div>
        <button onClick={toggleSidebar} className={`absolute top-4 hover:bg-green-600 p-1 rounded-md ${isOpen ? "right-4" : "left-5"}`}>
          <Menu size={30} />
        </button>
        <div className={`mt- mb-4 ${isOpen ? "block" : "hidden"}`}>
          <h1 className="text-xl font-bold">Hello World</h1>
        </div>

        <nav className="flex flex-col gap-4 w-full mt-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 hover:bg-green-600 p-2 rounded-md cursor-pointer"
            >
              <div className="min-w-[20px] flex justify-center">{item.icon}</div>
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-700`}>{item.label}</span>
            </div>
            
          ))}
        </nav>
      </div>
       <div className="flex flex-col gap-2 border-t border-white/30 pt-4">
          <div className="flex items-center gap-2">
            <User size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>{username}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:bg-green-600 p-2 rounded-md text-left"
          >
            <LogOut size={20} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-300">
        <div className="bg-gray-300 h-full">
          <h2 className="text-2xl font-bold mb-4">Home Page</h2>
        <p>This is the home page after login.</p>
        </div>
        
      </div>
    </div>
  );
}
