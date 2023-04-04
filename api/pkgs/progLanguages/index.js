const mongoose = require("mongoose");

const Language = mongoose.model(
  "language",
  {
    title: String,
    firstAppeared: Number,
    designedBy: String,
    skillsNeeded: String,
    popularity: String,
    filenameExtensions: String,
  },
  "languages"
);

const create = async (data) => {
  let language = new Language(data);
  return language.save();
};

const getAll = async () => {
  return language.find({});
};

const getOne = async (id) => {
  return language.findOne({ _id: id });
};

const updateOne = async (id, data) => {
  return language.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return language.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  remove,
};
