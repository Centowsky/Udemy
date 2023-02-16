class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  handleReset = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          placeholder="Wpisz"
          onChange={this.handleInputChange.bind(this)}
          type="text"
          value={this.state.value}
        ></input>
        <button onClick={this.handleReset}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
