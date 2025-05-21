import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav"; // Import the Nav component

export default function Layout() {
  
  return (
   
    <div className="flex h-screen ">
      <aside className=" bg-green-700 ">
        <Nav />
      </aside>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className=" h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}