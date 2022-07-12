const bcrypt = require("bcrypt");
const User = require("../../models/users");
const emailvalidator = require("email-validator");
const jwt = require('jsonwebtoken');

exports.signUp = (req, res) => {
  console.log("wseel");
    const { firstName, lastName, country, email, password, confirmPassword, phone } = req.body;
    console.log("password",password,"confirmPassword",confirmPassword,"phone",phone);
    User.findOne({ email: email })
      .then(findUser => {
        if (findUser) {
          res.send("already the email use");
          console.log("already the email use");
          return;
        }
        else if (!emailvalidator.validate(email)) {
          console.log(emailvalidator.validate(email));
          res.status(202).send("The email not validate");
          console.log("The email not validate");
          return;
        }
        else if (!(password == confirmPassword)) {
          console.log("The password dose not match");
          res.status(202).send("The password dose not match");
          console.log("The password dose not match");
          return;
        }
        return bcrypt
          .hash(password, 12)
          .then(hashedPassword => {
            const user = new User({
              firstName: firstName,
              lastName: lastName,
              country: country,
              email: email,
              password: hashedPassword,
              phone: phone
            });
            return user.save();
          })
          .then(result => {
            let token;
            try {
              token = jwt.sign(
                { userId: result._id.toString(), email: email },
                'supersecret',
                { expiresIn: '1h' }
              );
              res.status(200).send({ userId: result._id.toString(), email: email, token: token })
            }
            catch {
              console.log("failde");
            }
          });
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  }
  
  exports.verifiedToken = async (req, res) => {
    try {
      const token = req.header("Authorization").split(' ')[1];;
      console.log(token);
      if (!token) return res.json({ token: false });
      const verified = jwt.verify(token, 'supersecret',);
      console.log(verified);
      if (!verified) return res.json({ token: false });
      const user = await User.findById(verified.userId);
      if (!user) return res.json({ token: false });
      else {
        console.log('ok');
        return res.json({ token: token });
      }
    } catch (err) {
      res.json({ token: false });
    }
  };