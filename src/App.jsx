import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginform from "./LoginForm";
import Lists from "./components/Lists";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Layout from "./layouts/Layout";
import Contact from "./components/Contact";
import Home from "./Home";
import Profile from "./components/Profile";
// import Products from "./components/Products";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       
        <PublicRoute>
           <Loginform />
        </PublicRoute>
      ),
    },
    {
      path: "/lists",
      element: (
        <PrivateRoute>
          <Lists />
        </PrivateRoute>
      )},
    

    {
      element: <Layout />,
      children: [
         {
      path: "/home",
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      children: [
        // { path: "about", element: <About /> },
        // { path: "contact", element: <Contact /> },
      ],
    },
        {
          path: "contact",
          element: (
        <PrivateRoute>
          <Contact />
        </PrivateRoute>
      ),
        },
        {
          path: "/about",
          element: (
        <PrivateRoute>
          <About/>
        </PrivateRoute>
      ),
        },
        {
          path: "/profile",
          element: (
        <PrivateRoute>
          <Profile/>
        </PrivateRoute>
      ),
        },
       
      ],
    },
    // { path: "products", element: <Products /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
