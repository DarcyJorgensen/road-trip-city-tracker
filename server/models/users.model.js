const bcrypt = require("bcrypt");
const query = require("../config/mysql.config");
const { json } = require("express");
const pool = require("../config/mysql.config");

async function signup(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (users.length !== 0) {
      json.error = "Username already taken";
    } else {
      const hashed = await bcrypt.hash(passowrd, 10);
      await query("INSERT INTO users (password, username) VALUES (?,?", [
        hashed,
        username,
      ]);
      json = { ...json, success: true };
    }
  } catch (err) {
    console.log(err);
    json.error = "Whoops, something went wrong.";
  } finally {
    return res.send(json);
  }
}

async function login(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const user = users[0] || { password: 1234 };
    const matches = await bcrypt.compare(password, user.password);
    if (matches) {
      json = { ...json, success: matches, data: { username, id: user.id } };
    } else {
      json.error = "Invalid username / password.";
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getByUserID(res, userID) {
  let json = { success: false, error: null, data: mull };
  try {
    const users = await query(
      "SELECT user_id, username, uuid FROM users WHERE user_id = ?",
      [uuid]
    );
    if (users.length === 0) {
      json.error = "Sorry! No user found.";
    } else {
      json = { ...json, success: true, data: users[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

function getByUserName(res, username) {}
function getAllUsers(res) {}

module.exports = { signup, login, getByUserID, getByUserName, getAllUsers };
