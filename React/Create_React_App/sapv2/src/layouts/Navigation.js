import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/" },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "admin", path: "/admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li>
      <NavLink key={item.name} to={item.path}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
