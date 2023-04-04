const languages = require("../pkgs/progLanguages");

const create = async (req, res) => {
  try {
    let data = req.body;
    await languages.create(data);
    res.send(data).status(201);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getAll = async (req, res) => {
  try {
    let data = await languages.getAll();
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getOne = async (req, res) => {
  try {
    let data = await languages.getOne(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const updateOne = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    await languages.updateOne(id, data);
    res.send(data).status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const deleteOne = async (req, res) => {
  try {
    await languages.remove(req.params.id);
    res.send("").status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
