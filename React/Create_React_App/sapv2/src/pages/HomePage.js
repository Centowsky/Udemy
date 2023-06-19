import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Tytuł ",
    autor: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit commodi facere ea quasi fugit animi ut sapiente nobis accusamus iste, culpa voluptatibus fugiat sit neque! Eius veniam quidem nemo fugit.",
  },
  {
    id: 2,
    title: "Tytuł 2",
    autor: "Kochanowski",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit commodi facere ea quasi fugit animi ut sapiente nobis accusamus iste, culpa voluptatibus fugiat sit neque! Eius veniam quidem nemo fugit.",
  },
  {
    id: 3,
    title: "Tytuł 3",
    autor: "Adaś",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit commodi facere ea quasi fugit animi ut sapiente nobis accusamus iste, culpa voluptatibus fugiat sit neque! Eius veniam quidem nemo fugit.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article}></Article>
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
