import React, { Component } from "react";
import "../styles/ContactPage.css";

export default class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Wysłano!");
    this.setState({
      value: "",
      isEmpty: true,
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz swoją wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}
