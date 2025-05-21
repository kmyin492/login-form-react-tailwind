import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("status"); // or use context
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;