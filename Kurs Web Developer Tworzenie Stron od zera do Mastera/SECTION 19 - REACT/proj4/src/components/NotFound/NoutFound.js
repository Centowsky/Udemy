import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>404 NotFound</h3>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
}

export default NotFound;
