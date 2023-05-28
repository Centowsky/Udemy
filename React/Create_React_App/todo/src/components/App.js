import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./Tasklist";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        TODO
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
