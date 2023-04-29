import React from "react";
import "./Dane.css";

const Dane = (props) => (
  <li>
    Position: {props.id} <b>{props.title}</b> Year: <b>{props.year}</b>{" "}
    <u>{props.author}</u>
  </li>
);

export default Dane;
