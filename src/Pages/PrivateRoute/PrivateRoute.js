import React from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <h3 className="text-center">Loading....</h3>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
