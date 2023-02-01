import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";

const user = {
  name: "Centowsky",
  rank: "Admin",
};

const companyData = {
  email: "company@example.com",
  city: "Szczecin",
  street: "Chopina 55",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Heading user={user}></Heading>
    <App />
    <Footer companyData={companyData} contactEmail="admin@example.com"></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
