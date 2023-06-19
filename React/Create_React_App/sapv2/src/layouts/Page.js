import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductsListPage from "../pages/ProductsListPage";
import ProductPage from "../pages/ProductsPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductsListPage />}></Route>
      <Route path="/product/:id" component={<ProductPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Page;
