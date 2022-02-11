import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UpdateUser from "../pages/UpdateUser";
import UserDetails from "../pages/UserDetails";

function Routers() {
  return (
    <Routes>
      <Route strict path="/" element={<Home />} />
      <Route strict path="/detail/:id" element={<UserDetails />} />
      <Route strict path="/update/:id" element={<UpdateUser />} />
    </Routes>
  );
}

export default Routers;
