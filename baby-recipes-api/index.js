const express = require("express");
const recipes = require("./handlers/recipes");
const db = require("./pkg/db");
db.init();

const app = express();
app.use(express.json());

app.post("/recipes", recipes.create);
app.get("/recipes", recipes.getAll);
app.get("/recipes/:id", recipes.getOne);
app.put("/recipes/:id", recipes.updateOne);
app.delete("/recipes/:id", recipes.deleteOne);

app.listen(8080, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 8080");
});
