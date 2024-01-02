import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuthenticate = () => {
  return true;
  // if false then book can't show
}

const PrivateRoute = () => {
  const isAuthenticated = useAuthenticate();
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;