const Item = ({ wrozba }) => (
  <div className="wrozba">
    <p>Informacje o użytkowniku</p>
    <em>{wrozba.title}</em>
  </div>
);

class Wrozba extends React.Component {
  state = {
    text: "",
    twojaWrozba: "",
    data: [
      { id: 1, title: "Pierwsza wróżba" },
      { id: 2, title: "Druga wróżba" },
      { id: 3, title: "Trzecia wróżba" },
    ],
  };
  handleRandom = () => {
    const max = this.state.data.length;
    const randomInt = Math.floor(Math.random() * max) + 1;

    let wrozba = this.state.data.filter((wrozba) => wrozba.id === randomInt);

    this.setState({
      twojaWrozba: wrozba[0].title,
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAdd = () => {
    if (this.state.text.length > 5) {
      const id = this.state.data.length + 1;
      const text = this.state.text;

      const data = [...this.state.data];
      data.push({
        id: id,
        title: text,
      });

      this.setState({
        data,
        text: "",
      });
    } else {
      alert("Wróżba powinna zawierać więcej niz 5 znaków!");
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandom}>Wróżba dla ciebie</button>
        <br />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Dodaj swoją wróżbę</button>
        <br />
        <p>{this.state.twojaWrozba}</p>
      </div>
    );
  }
}

ReactDOM.render(<Wrozba />, document.getElementById("root"));
