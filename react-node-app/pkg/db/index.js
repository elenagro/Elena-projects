const mongoose = require("mongoose");

require("dotenv").config();

const init = () => {
  const url = process.env.URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const dbname = process.env.DB_NAME;
  const dsn = `mongodb+srv://${username}:${password}@${url}/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(dsn);
};

module.exports = {
  init,
};
