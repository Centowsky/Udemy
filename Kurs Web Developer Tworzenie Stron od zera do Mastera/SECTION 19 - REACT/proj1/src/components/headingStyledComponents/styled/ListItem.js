import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  cursor: pointer;
  display: inline;
  margin-left: 1rem;
  color: ${(props) => (props.active ? "red" : "#000000")};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};

  &:hover {
    text-decoration: none;
    text-decoration: underline;
  }
`;

export const BorderListItem = styled(ListItem)`
  border: 2px solid #000000;
`;

export default ListItem;
