const config = require("../../pkg/config");
const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const auth = require("./handlers/auth");
const db = require("../../pkg/db");

db.init();

const api = express();

api.use(express.json());

api.use(
  jwt({
    algorithms: ["HS256"],
    secret: config.get("security").jwt_secret,
  }).unless({
    path: [
      "/api/v1/auth/create-account",
      "/api/v1/auth/login",
      "/api/v1/auth/forgot-password",
      "/api/v1/auth/reset-password",
    ],
  })
);
