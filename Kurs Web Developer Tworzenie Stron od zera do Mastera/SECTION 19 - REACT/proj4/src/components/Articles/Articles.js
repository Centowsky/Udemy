import React from "react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  render() {
    return (
      <div>
        <p>Komponent Articles</p>
        <ul>
          <li>
            <Link to="/article?title=hello-world&time=1">001</Link>
          </li>
          <li>
            <Link to="/article?title=new-content&time=2">002</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Articles;
