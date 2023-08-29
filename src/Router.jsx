import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Route, Routes, HashRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage.jsx";
import Login from "./pages/Login.jsx";
import DbContextProvider, { DbContext } from "./context/DbContext.jsx";
import NewPost from "./pages/NewPost.jsx";
import PrivateRoute from "./helpers/PrivateRouter.jsx";

const Router = () => {
  return (
    <HashRouter>
      <DbContextProvider>
        <Routes>
          <Route
            path="/newPost"
            element={
              <PrivateRoute>
                <NewPost />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newPost" element={<NewPost />}></Route>
          <Route path="/detailPage/:id" element={<DetailPage />}></Route>
        </Routes>
      </DbContextProvider>
    </HashRouter>
  );
};

export default Router;
