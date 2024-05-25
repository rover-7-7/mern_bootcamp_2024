// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

// Define a route that handles GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(res);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(req);
  res.send(`Hello user! , ${id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
