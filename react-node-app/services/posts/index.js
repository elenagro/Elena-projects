require("dotenv").config();
const db = require("../../pkg/db");
const express = require("express");
const jwt = require("express-jwt");
const posts = require("./handlers/posts");
const authors = require("./handlers/authors");

db.init();

const api = express();

api.use(express.json());
api.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
  })
);

api.get("/api/v1/posts/authors", authors.getAll);
api.get("/api/v1/posts", posts.getAll);
api.get("/api/v1/posts/me", posts.getMine);
api.get("/api/v1/posts/:handle", posts.getUsers);

api.post("/api/v1/posts", posts.create);
api.put("/api/v1/posts/:id", posts.update);
api.delete("/api/v1/post/:id", posts.remove);

api.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Service [posts] successfully started on port", process.env.PORT);
});
