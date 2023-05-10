const bcrypt = require("bcryptjs");
const user = require("../../../pkg/user");
const jwt = require("jsonwebtoken");
// const config = require("../../../pkg/config");
require("dotenv").config();

const create = async (req, res) => {
  try {
    // check the equality of passwords
    if (
      req.body.password.length === 0 ||
      req.body.password !== req.body.password2
    ) {
      return res.status(400).send("Bad request");
    }

    // check if th user already exists
    let u = await user.getUserByEmail(req.body.email);
    if (u) {
      return res.status(409).send("Conflict");
    }

    // hash the password
    req.body.password = bcrypt.hashSync(req.body.password);

    // save the new user in the base
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    // check if the user already exists
    let u = await user.getUserByEmail(req.body.email);
    if (!u) {
      return res.status(400).send("Bad request. Bad login credentials.");
    }

    //  check if the password corresponds to the password from the base
    if (!bcrypt.compareSync(req.body.password, u.password)) {
      return res.status(400).send("Bad request. Bad login credentials.");
    }

    // generate and send token
    let payload = {
      uid: u._id,
      email: u.email,
      fullName: u.fullName,
    };

    let token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

// forgot and reset password
const forgotPassword = async (req, res) => {
  return res.send("ok");
};

const resetPassword = async (req, res) => {
  return res.send("ok");
};

// validation

const validate = async (req, res) => {
  console.log(req.auth);
  return res.status(200).send(req.auth); // return the token payload
};

module.exports = {
  create,
  login,
  forgotPassword,
  resetPassword,
  validate,
};
