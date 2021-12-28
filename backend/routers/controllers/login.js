const jwt = require("jsonwebtoken");
const db = require("./../../db/db");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT * FROM user WHERE email = ? ;`;
  const data = [email];
  db.query(query, data, async (err, result) => {
    if (!result[0]) {
      return res.json("the Email doesn't exist");
    }
    console.log(result);
    const confirm = await bcrypt.compare(password, result[0].password);
    if (confirm) {
      res
        .json("valid login");
    } else return res.json("The password is not correct");
  });
};

module.exports = {
  login,
};