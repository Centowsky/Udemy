const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.get("/article/:date/:id/:title", (req, res) => {
  const date = req.params.date;
  const id = req.params.id;
  const title = req.params.title;
  res.status(200).send(`Hello! Date: ${date}, id: ${id}, Title: ${title}`);
});

app.listen(8080, () => {
  console.log("Server stared...");
});
