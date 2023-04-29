import React, { Component } from "react";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);
        this.setState({ users });
      }
      //console.log(xhr.response);
    };
    xhr.send(null);
  }

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <h4>Nazwa: {user.name}</h4>
        <p>Email: {user.email}</p>
      </div>
    ));
    return (
      //<div>{this.state.isLoaded ? { users } : "Trwa ładowanie danych!"}</div>
      <div>{users}</div>
    );
  }
}

export default App;
