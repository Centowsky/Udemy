import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

const Home = () => <h1>Strona starowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;
const ErrorPage = () => <h1>Nie odnaleziono strony!</h1>;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Start</NavLink>
                </li>
                <li>
                  <NavLink to="/news">Aktualnosci</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Kontakt</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}
