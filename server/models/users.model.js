const bcrypt = require("bcrypt");
const pool = require("../config/mysql.config");

function signup(res, username, password) {}
function login(res, username, password) {}
function getByUserID(res, userID) {}
function getByUserName(res, username) {}
function getAllUsers(res) {}

module.exports = { signup, login, getByUserID, getByUserName, getAllUsers };
