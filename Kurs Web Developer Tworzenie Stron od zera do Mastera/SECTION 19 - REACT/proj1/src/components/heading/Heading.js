import React from "react";
import "./heading.css";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = { link1: "Home - Centowsky" };
  }
  render() {
    return (
      <div>
        <nav>
          <h2>
            Witaj, {this.props.user.name}. Twoja ranga: {this.props.user.rank}
          </h2>
          <ul className="navigation">
            <li>{this.state.link1}</li>
            <li>Blok</li>
            <li>Artykuły</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Heading;
