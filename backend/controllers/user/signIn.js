const bcrypt = require("bcrypt");
const User = require("../../models/users");
const jwt = require('jsonwebtoken')

exports.signIn = (req, res) => {
  console.log("wesel");
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
      .then(findUser => {
        if (!findUser) {
  
          return res.status(401).send('email not connected to any user');;
        }
        bcrypt
          .compare(password, findUser.password)
          .then(doMatch => {
            if (doMatch) {
              let token;
              try {
                token = jwt.sign(
                  { userId: findUser.id, email: findUser.email, admin: findUser.admin },
                  'supersecret',
                  { expiresIn: '1h' }
                );
                console.log(req.headers);
                res.status(200).json({ userId: findUser.id, email: findUser.email, token: token })
              }
              catch {
                console.log("failde");
              }
            }
            else {
              res.status(400).send('not passed');
            }
          }
          )
          .catch(err => {
            res.status(401).send(err);
  
          });
      })
      .catch(err => res.status(400).send(err));
  }