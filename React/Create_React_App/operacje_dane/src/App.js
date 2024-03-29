import React, { Component } from "react";
import "./App.css";

//pseudorosnoca baza danych
const data = [
  { id: 1, title: "Wiadomość nr 1", body: "Zawartość wiadomości nr 1..." },
  { id: 2, title: "Wiadomość nr 2", body: "Zawartość wiadomości nr 2..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości nr ${index}...`,
  });
}, 10000);

class App extends Component {
  state = {
    comments: [...data],
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data],
      });
    }
  };

  componentDidMount() {
    this.idInterval = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }
  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <p>{comment.body}</p>
      </div>
    ));
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
