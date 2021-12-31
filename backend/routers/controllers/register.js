const db = require("./../../db/db");
const bcrypt = require("bcrypt");
const { request } = require("express");
const salt = Number(process.env.SALT);

const createUser = async (req, res) => {
  let { firstName,lasttName,email,password} = req.body;
  console.log(firstName);
  if (!firstName) {
    console.log("please fill first name text");
    res.json("please fill first name text").status(400);
  }
  else if (!lasttName) {
    console.log("please fill first name text");
    res.json("please fill lastt name text").status(400);
  }
  else if (!password) {
    console.log("please fill first name text");
    res.json("please fill password text").status(400);
  }
  else if (!email) {
    console.log("please fill first name text");
    res.json("please fill email text").status(400);
  } else {
    const query = `INSERT INTO user (firstName,lasttName,email,password) VALUES (?,?,?,?)`;
    let pass =password.toString()
    password = await bcrypt.hash(pass, 10);
    email = await email.toLowerCase();
    const data = [firstName,lasttName, email, password];
    console.log(data)
    db.query(query, data, (err, result) => {
      if (err) {
          console.log(err); 
          res.send("Please fill all text").status(400);}
      res.status(201).json(result);
    });
  }
};

module.exports = {
  createUser,
};