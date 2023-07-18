import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CategoryDeal from "../Pages/CategoryDeal";
import Deal from "../Pages/Deal";
import Login from "./Login";
import Signup from "./Signup";

const Routex = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:CategoryId" element={<CategoryDeal />} />
          <Route path="/deal/:Deal_name" element={<Deal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routex;
