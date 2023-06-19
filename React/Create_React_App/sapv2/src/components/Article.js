import React from "react";

const Article = ({ title, autor, text }) => {
  const styles = {
    marginTop: 40,
  };
  return (
    <article style={styles}>
      <h3>{title}</h3>
      <h6>{autor}</h6>
      <p>{text}</p>
    </article>
  );
};

export default Article;
