import "./App.css";
import React, { Component } from "react";
import Dane from "./Dane";

class App extends Component {
  state = {
    data: [],
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch("data/data.json").then((response) =>
      response.json().then((data) => {
        this.setState({
          data: data.books,
          isLoaded: true,
        });
      })
    );
  };

  render() {
    const data = this.state.data.map((dane) => (
      <Dane
        key={dane.id}
        id={dane.id}
        title={dane.title}
        year={dane.year}
        author={this.props.author}
      />
    ));
    return <ul>{this.state.isLoaded ? data : "Wczytuje dane..."}</ul>;
  }
}

export default App;
