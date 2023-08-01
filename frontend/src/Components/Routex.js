import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CategoryDeal from "../Pages/CategoryDeal";
import Deal from "../Pages/Deal";
import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "../Pages/PageNotFound";
import Profile from "../Pages/Profile";
import ChangePassword from "../Pages/ChangePassword";

const Routex = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category/:CategoryId" element={<CategoryDeal />} />
          <Route path="/deal/:Deal_name" element={<Deal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routex;
