class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLike: true,
    number: "2",
  };

  handleChange = (event) => {
    if (event.target.type === "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto:
          <input
            value={this.state.city}
            type="text"
            onChange={this.handleChange}
            name="city"
          />
        </label>
        <br />
        <label>
          Napisz coś o mieście
          <textarea
            value={this.state.text}
            onChange={this.handleChange}
            name="text"
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            type="checkbox"
            checked={this.state.isLike}
            onChange={this.handleChange}
            name="isLike"
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">Więcej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
