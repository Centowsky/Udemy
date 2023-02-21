class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      napis: " ",
      btn: "Tworzenie liczby",
    };
  }
  // state = {
  //   napis: "",
  // };

  handleClick() {
    // this.state.napis += "a";
    // alert(this.state.napis);
    const number = Math.floor(Math.random() * 10);
    // this.setState({
    //   napis: this.state.napis + litera,
    // });

    this.setState(() => ({
      napis: this.state.napis + number,
    }));
  }

  render() {
    const btnName = "Dodawanie cyfr";
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
        <PanelWynik wynik={this.state.napis} />
      </>
    );
  }
}

const PanelWynik = (props) => {
  return <h1>{props.wynik}</h1>;
};

ReactDOM.render(
  <App btnTitle="Podaj cyfre" />,
  document.getElementById("root")
);
