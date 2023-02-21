const ValidationMessage = (props) => <p>{props.txt}</p>;

const OrderForm = (props) => {
  const { submit, check, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" checked={check} onChange={change}></input>
      <label htmlFor="age">Czy masz 16 lat?</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isValidated: false,
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isValidated: false,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.isValidated) {
      this.setState({
        isValidated: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isValidated) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Spełniasz wymogi. Zapraszamy" />;
      } else {
        return <ValidationMessage txt="Masz za mało lat. Sorry :(" />;
      }
    } else return null;
  };

  render() {
    const { isConfirmed, isValidated } = this.state;

    return (
      <>
        <h1>Kup bilet na horror</h1>
        <OrderForm
          change={this.handleChange}
          submit={this.handleFormSubmit}
          check={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
