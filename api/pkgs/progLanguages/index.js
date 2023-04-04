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
  return Language.find({});
};

const getOne = async (id) => {
  return Language.findOne({ _id: id });
};

const updateOne = async (id, data) => {
  return Language.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return Language.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  remove,
};
