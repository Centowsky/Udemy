import React from "react";
import ListItem, { BorderListItem } from "./styled/ListItem";
class HeadingStyledComponent extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <BorderListItem>Home</BorderListItem>
            <ListItem active>About</ListItem>
            <ListItem>Contact</ListItem>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeadingStyledComponent;
