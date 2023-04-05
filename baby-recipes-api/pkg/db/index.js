const mongoose = require("mongoose");
const init = () => {
  const dsn =
    "mongodb+srv://elegro:02082020ina@javascriptacademy.xqilkst.mongodb.net/Recipes?retryWrites=true&w=majority";
  mongoose.connect(dsn);
};

module.exports = {
  init,
};
