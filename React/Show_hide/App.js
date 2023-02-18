class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  render() {
    const text = "Information...";
    console.log(this.state);

    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isClicked ? "Hide" : "Show"}
        </button>
        {this.state.isClicked ? <p>text</p> : null}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
