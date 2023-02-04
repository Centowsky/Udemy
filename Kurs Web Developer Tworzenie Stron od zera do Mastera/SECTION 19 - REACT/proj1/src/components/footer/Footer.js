import React from "react";
import Copyright from "../copyright/Copyright";
import "./footer.css";

const elements = ["TOS", "About", "SocialMedia"];

function Footer(props) {
  let isLogged = true;
  let button;
  if (isLogged) {
    button = <button>Logout</button>;
  } else {
    button = <button>Login</button>;
  }

  return (
    <div>
      <footer>
        <ul>
          {elements.map((value, index) => {
            return <li>{value}</li>;
          })}
          <li>Regulamin</li>
          <li>FAQ</li>
          <li>Contact: {props.contactEmail}</li>
          <li>
            {props.companyData.email}, {props.companyData.city},
            {props.companyData.street}
          </li>
        </ul>
        <Copyright year="2023"></Copyright>
        {button}

        {isLogged === true && <div>Sprawdź pocztę!</div>}

        {isLogged ? <div>Zobacz powiadomienia</div> : <div>Zaloguj sie!</div>}
      </footer>
    </div>
  );
}

export default Footer;
