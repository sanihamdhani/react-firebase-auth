import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./userAuth";
const Protected = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Ceck Data: ", user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export const ProtectedRoot = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Ceck Data: ", user);

  if (user) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default Protected;
