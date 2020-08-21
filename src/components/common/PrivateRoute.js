import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";

export const PrivateRoute = () => {
  const authed = useContext(AuthContext);

  if (authed) {
    return <Redirect to="/dasboard" />;
  }
  return <Redirect to="/login" />;
};
