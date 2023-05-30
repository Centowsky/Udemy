import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./Tasklist";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Skonczyc kurs React",
        date: "2023-06-30",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Przyklad 1",
        date: "2023-09-14",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Przyklad 2",
        date: "2023-07-24",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("Delete!" + id);
  };

  changeTaskStatus = (id) => {
    console.log("Change!" + id);
  };

  render() {
    return (
      <div className="App">
        TODO
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
