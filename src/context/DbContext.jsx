import { createContext, useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export const DbContext = createContext();

function DbContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : {};
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("user") ? true : false;
  });

  const login = async (username, password) => {
    const response = await api.get(
      `authors?username=${username}&password=${password}`
    );
    console.log(response);

    // if res length > 0
    // set user state

    // else
    // show message (wrong username/password)

    if (response.length > 0) {
      setUser(response[0]);
      setLoggedIn(true);
      console.log("rgkjkjhf4ehk");
      return navigate("/");
    } else {
      response.statue(400).jsonp({
        error: "wrong username or password",
      });
    }
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <DbContext.Provider value={{ loggedIn, login, user, logout }}>
      {children}
    </DbContext.Provider>
  );
}

export default DbContextProvider;
