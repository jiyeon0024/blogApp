import React, { Children, useContext, useEffect } from "react";
import { DbContext } from "../context/DbContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loggedIn } = useContext(DbContext);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
