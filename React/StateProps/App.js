class ShopingList extends React.Component {
  state = {
    items1: "sok",
    items2: "mleko",
    items3: "piwo",
  };

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList item={this.state.items1} />
          <ItemList item={this.state.items2} />
          <ItemList item={this.state.items3} />
        </ul>
      </>
    );
  }
}

// const ItemList = (props) => {
//   return <li>{props.item}</li>;
// };

class ItemList extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}

ReactDOM.render(<ShopingList />, document.getElementById("root"));
