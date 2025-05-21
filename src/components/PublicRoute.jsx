import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("status");
  return isLoggedIn ? <Navigate to="/home" replace /> : children;
};

export default PublicRoute;