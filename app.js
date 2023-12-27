const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/products");

app.get("/products");

app.listen(3000, () => {
  console.log("Connected to the Server successfully!");
});
