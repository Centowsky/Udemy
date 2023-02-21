const User = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <br />
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

class Lista extends React.Component {
  state = {
    users: [
      { id: 1, name: "Arek" },
      { id: 2, name: "Marta" },
      { id: 3, name: "Stasia" },
      { id: 4, name: "Karol" },
    ],
  };

  //   handleDelete(id) {
  //     const users = [...this.state.users];
  //     const index = users.findIndex((user) => user.id === id);
  //     users.splice(index, 1);
  //     this.setState({
  //       users,
  //     });
  //   }

  handleDelete(name) {
    //let users = Array.from(this.state.users);
    let users = this.state.users.slice();
    users = users.filter((user) => name !== user.name);
    this.setState({
      users,
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((p) => (
            <User
              key={p.id}
              name={p.name}
              delete={this.handleDelete.bind(this, p.name)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Lista />, document.getElementById("root"));
