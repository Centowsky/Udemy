const App = () => {
  return (
    <div>
      <h1>Hello - 1!</h1>
    </div>
  );
};

class App2 extends React.Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <section>
        <h2>Hello -2!</h2>
        <p>{this.state.number + 1}</p>
      </section>
    );
  }
}

ReactDOM.render(<App2 />, document.getElementById("root"));
