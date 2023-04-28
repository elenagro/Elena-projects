require("dotenv").config();
const express = require("express");
const languages = require("./handlers/progLangs");
const db = require("./pkgs/db");

const app = express();
app.use(express.json());

db.init();

app.get("/languages/:id", languages.getOne);
app.get("/languages", languages.getAll);
app.post("/languages", languages.create);
app.put("/languages/:id", languages.updateOne);
app.delete("/languages/:id", languages.deleteOne);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully");
});
