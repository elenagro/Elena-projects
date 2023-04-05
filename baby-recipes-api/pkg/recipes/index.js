const mongoose = require("mongoose");

const Recipe = mongoose.model(
  "recipe",
  {
    title: String,
    ingredients: String,
    preparation: String,
    portions: Number,
  },
  "recipes"
);

const create = async (data) => {
  let recipe = new Recipe(data);
  return recipe.save();
};

const getAll = async () => {
  return Recipe.find({});
};

const getOne = async (id) => {
  return Recipe.findOne({ _id: id });
};

const updateOne = async (id, data) => {
  return Recipe.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return Recipe.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  remove,
};
