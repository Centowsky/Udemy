import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/api/?results=5";

export default class App extends Component {
  state = {
    users: null,
  };

  handleDataFetch = () => {
    //console.log("click");
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data.results,
        });
      });
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : <p>Brak danych!</p>}
      </div>
    );
  }
}
