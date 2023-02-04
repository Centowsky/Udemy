import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    //mounting #1
    super(props);
    console.log("Constructor");
    this.state = {};
  }

  //mounting #2 update #1
  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps");
    return null;
  }

  //update #2
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  //mounting #3 update #3
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  //update #4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  //mounting #4
  componentDidMount() {
    console.log("componentDidMount");
  }

  //update #5
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default App;
