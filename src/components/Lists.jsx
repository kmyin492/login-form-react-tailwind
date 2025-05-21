// import { useState } from "react";
// import { Home, Box, Info, Phone, Menu, User, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import ToggleButton from "./Togglebutton"; // Import the ToggleButton component
// import { NavLink, Outlet } from "react-router-dom";
import Table from "./Table";
import { Nav } from "./Nav"; // Import the Nav component

export default function Lists() {
  
  return (
   
    <div className="flex h-screen ">
      <aside className=" bg-green-700 ">
        <Nav />
      </aside>

      <div className="flex-1 overflow-y-auto p bg-gray-300">
        <div className="bg-gray-300 h-full">
          <Table />
        </div>
      </div>
    </div>
  );
}
