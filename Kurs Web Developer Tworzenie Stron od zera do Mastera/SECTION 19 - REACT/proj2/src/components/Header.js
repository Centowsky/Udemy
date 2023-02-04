import React from "react";
import "./header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "home",
      linkActive: false,
    };
  }

  toggle = (event) => {
    console.log("Link id: " + event.target.id + "clicked");
    this.setState((state) => ({ linkActive: !state.linkActive }));
  };

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li className={this.state.linkActive ? "clicked" : ""}>
              <a href="#" id="link1" onClick={this.toggle}>
                {this.state.link}
              </a>
              <p>{this.state.linkActive ? "Clicked!" : "Not clicked!"}</p>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
