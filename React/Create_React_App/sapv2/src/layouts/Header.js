import React from "react";
import "../styles/Header.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import { Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<img src={img1} alt="img1" />}></Route>
      <Route path="/products" element={<img src={img2} alt="img2" />}></Route>
      <Route path="/contact" element={<img src={img3} alt="img3" />}></Route>
      <Route path="/admin" element={<img src={img1} alt="img1" />}></Route>
      <Route path="*" element={<img src={img1} alt="img1" />}></Route>
    </Routes>
  );
};

export default Header;
