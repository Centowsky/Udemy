import React from "react";
import { useLocation } from "react-router-dom";

const Article = () => {
  const query = new URLSearchParams(useLocation().search);
  const title = query.get("title");
  const time = query.get("time");

  return (
    <div>
      <p>Article {title}</p>
      <div>Time: {time}</div>
    </div>
  );
};

export default Article;
