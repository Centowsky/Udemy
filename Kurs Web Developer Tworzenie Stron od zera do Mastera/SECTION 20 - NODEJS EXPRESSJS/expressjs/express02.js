const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.get("/route_get", (req, res) => {
  res.status(200).send("Hello world! - get_route");
});

app.post("/route_post", (req, res) => {
  res.status(200).send("Hello world! - post_route");
});

app.all("/route_all", (req, res) => {
  res.status(200).send("Hello world! - all_route");
});

app.listen(8080, () => {
  console.log("Server stared...");
});
