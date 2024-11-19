require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hello from ramesh gorekanti");
});

app.get("/login", (req, res) => {
  res.send("<strong>please login at page</strong>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>YouTube</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});
