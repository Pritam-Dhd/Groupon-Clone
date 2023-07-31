import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CategoryDeal from "../Pages/CategoryDeal";
import Deal from "../Pages/Deal";
import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "../Pages/PageNotFound";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routex;
