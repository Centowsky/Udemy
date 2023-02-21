const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};
class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "prad",
  };

  static defaultProps = {
    curruencies: [
      { id: 0, name: "Zloty", ratio: 1, title: "Wartość w złotówkach: " },
      { id: 1, name: "Dolar", ratio: 3.6, title: "Wartość w dolarach: " },
      { id: 2, name: "Euro", ratio: 4.1, title: "Wartość w euro: " },
      { id: 3, name: "Funty", ratio: 4.55, title: "Wartość w funtach: " },
    ],
    prices: {
      prad: 0.51,
      woda: 1.72,
      benzyna: 7.56,
    },
  };

  //   curruencies = [
  //     { id: 1, name: "Dolar", ratio: 3.6, title: "Wartość w dolarach: " },
  //     { id: 2, name: "Euro", ratio: 4.1, title: "Wartość w euro: " },
  //     { id: 3, name: "Funty", ratio: 4.55, title: "Wartość w funtach: " },
  //   ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  inputSuffix(select) {
    switch (select) {
      case "prad":
        return <em> kWh</em>;
      case "woda":
        return <em> CBM</em>;
      case "benzyna":
        return <em> l</em>;
      default:
        return null;
    }
  }

  selectPrice(select) {
    return this.props.prices[select];
  }
  render() {
    const { amount, product } = this.state;
    const calculators = this.props.curruencies.map((currency) => (
      <Cash
        key={currency.id}
        name={currency.name}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={this.selectPrice(product)}
      />
    ));
    return (
      <div className="app">
        <label>
          Wybierz produkt:{" "}
          <select value={product} onChange={this.handleSelect}>
            <option value="prad">Prąd</option>
            <option value="woda">Woda</option>
            <option value="benzyna">Benzyna</option>
          </select>
          <br />
        </label>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.inputSuffix(product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
