import React from "react";
import { Routes, Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h3>Stopka</h3>
      <Routes>
        <Route
          path="/"
          exact
          render={(props) => {
            console.log(props);
            return <p>Dodatkowe info:</p>;
          }}
        />
      </Routes>
    </div>
  );
};

export default Footer;
