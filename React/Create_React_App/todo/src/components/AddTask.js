import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 3) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Zbyt krótkie zadanie!");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate += "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <br />
        <input
          id="important"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Czy priorytetyowy?</label>
        <br />
        <label htmlFor="date">Do kiedy?</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
