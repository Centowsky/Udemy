import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=1";

export default class App extends Component {
  state = {
    users: [],
  };

  handleDataFetch = () => {
    //console.log("click");
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const user = data.results;
        this.setState((prevState) => ({
          users: prevState.users.concat(user),
        }));
      });
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : <p>Brak danych!</p>}
      </div>
    );
  }
}
