import { BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>
          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
