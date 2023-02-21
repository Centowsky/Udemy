class App extends React.Component {
  state = {
    availableProd: 20,
    shopCount: 0,
  };

  handleRemove = () => {
    this.setState({
      shopCount: this.state.shopCount - 1,
    });
  };

  handleAdd = () => {
    this.setState({
      shopCount: this.state.shopCount + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      availableProd: this.state.availableProd - this.state.shopCount,
      shopCount: 0,
    });
    alert("Kupione!");
  };

  render() {
    const { shopCount, availableProd } = this.state;
    const styl = shopCount === 0 ? { opacity: 0.3 } : {};
    return (
      <div>
        <button onClick={this.handleRemove} disabled={shopCount ? false : true}>
          -
        </button>
        <span style={styl}> {shopCount} </span>
        <button
          onClick={this.handleAdd}
          disabled={shopCount >= availableProd ? true : false}
        >
          +
        </button>
        {shopCount > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
