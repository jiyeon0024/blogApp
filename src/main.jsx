import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, HashRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage.jsx";
import Login from "./pages/Login.jsx";
import DbContextProvider from "./context/DbContext.jsx";
import NewPost from "./pages/NewPost.jsx";
import PrivateRoute from "./helpers/PrivateRouter.jsx";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>
);
