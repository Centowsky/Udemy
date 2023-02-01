import React from "react";
import Copyright from "../copyright/Copyright";
import "./footer.css";

function Footer(props) {
  return (
    <div>
      <footer>
        <ul>
          <li>Regulamin</li>
          <li>FAQ</li>
          <li>Contact: {props.contactEmail}</li>
          <li>
            {props.companyData.email}, {props.companyData.city},
            {props.companyData.street}
          </li>
        </ul>
        <Copyright year="2023"></Copyright>
      </footer>
    </div>
  );
}

export default Footer;
