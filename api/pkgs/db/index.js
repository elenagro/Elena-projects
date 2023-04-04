const mongoose = require("mongoose");

const init = () => {
  const dsn =
    "mongodb+srv://elegro:02082020ina@javascriptacademy.xqilkst.mongodb.net/Languages?retryWrites=true&w=majority";
  mongoose.connect(dsn);
};

module.exports = {
  init,
};

// const init = () => {
//     const dsn = 'mongodb+srv://zhivko:xx5pAIg0QFcszlrS@cluster0.mcazydz.mongodb.net/Movies?retryWrites=true&w=majority'
//     mongoose.connect(dsn);
// };
