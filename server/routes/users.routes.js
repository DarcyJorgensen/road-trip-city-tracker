const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getAllUsers,
  getByUserID,
  getByUsername,
} = require("../models/users.model");

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return signup(res, username, password);
  }
  return res.send("SIGNUP ROUTE");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return login(res, username, password);
  }
  return res.send("LOGIN ROUTE");
});

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return res.send("SIGNUP ROUTE");
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return login(res, username, password);
  }
  return res.send("LOGIN ROUTE");
});

function validate(username, password) {
  return (
    username &&
    username.length >= 5 &&
    username.length <= 20 &&
    password &&
    password.length >= 5 &&
    password.length <= 20
  );
}

module.exports = router;
