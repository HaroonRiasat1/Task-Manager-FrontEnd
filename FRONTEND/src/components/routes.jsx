import Loginform from "./loginform";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerform from "./registerform";
import Admin from "./Admin";
import Tester from "./Tester";
import Developer from "./Developer";

function Rooutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginform />}></Route>
          <Route path="/Register" element={<Registerform />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Developer/:devId" element={<Developer />}></Route>
          <Route path="/Tester/:testId" element={<Tester />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Rooutes;
