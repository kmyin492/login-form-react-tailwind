import React from "react";
import { useState } from "react";
import { Home, Box, Info, Phone, Menu, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton"; // Import the ToggleButton component
import { NavLink, Outlet } from "react-router-dom";

export const Nav = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // const activeControl = ({ isActive }) => {
  //   return isActive ? "font-bold" : "text-gray-300";
  // };

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", route: "/home" },
    { icon: <Box size={20} />, label: "Lists", route: "/lists" },
    { icon: <Info size={20} />, label: "About", route: "/about" },
    { icon: <Phone size={20} />, label: "Contact", route: "/contact" },
  ];
  const username = localStorage.getItem("username") || "Guest"; //get the usname from local storage

  const handleLogout = () => {
    // Logic to logout and redirect
    // window.location.href = "/";
    nav("/");
    localStorage.clear();
  };
  return (
    <div
      className={`transition-all duration-700 bg-green-700 text-white h-screen p-4 relative flex flex-col items-center justify-between ${
        isOpen ? "w-50" : "w-20"
      }`}
    >
      <div className=" items-center">
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 bg-green-600 rounded-md  border-t-2 border-l-1   active:bg-green-600 transition duration-700  hover:shadow-lg hover:bg-green-600 ${
            isOpen ? "right-2" : "left-4.5 p-1.5"
          }`}
        >
           {/* <Menu size={30} /> */}

          <ToggleButton />
        </button>
        <div
          className={` absolute mt  ${
            isOpen ? "block" : "hidden"
          } transition duration-500`}
        >
          <h1 className="text-xl font-bold ">Hello World</h1>
        </div>

        <nav className="flex flex-col gap-3  mt-14 ">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className={({ isActive }) =>
        `flex items-center gap-2 hover:bg-green-600 p-3 rounded-md border-t border-white/30 ${
          isOpen ? "justify-start" : "justify-center"
        } ${isActive ? "font-bold" : "text-gray-300"}`
      }
              activeClassName="font-bold"
            >
              <div className="min-w-[20px] flex items-center">
                {item.icon}
              </div>
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2 justify-center border-t border-white/30 pt-4">
        <div className="flex items-center gap-2 hover:bg-green-600 p-2 rounded-md border-t border-white/30">
          <User size={20} />
          <span className={`${isOpen ? "block" : "hidden"}`}>{username}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 hover:bg-green-600 p-2 rounded-md text-left border-t border-white/30"
        >
          <LogOut size={20} />
          <span className={` left-2 ${isOpen ? "block" : "hidden"}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};
