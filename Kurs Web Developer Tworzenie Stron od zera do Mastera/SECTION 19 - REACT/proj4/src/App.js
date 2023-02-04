import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NoutFound";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
