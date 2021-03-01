// const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create: (req, res) => {
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) console.log(err);
        else {
          console.log(hash);
          const token = jwt.sign(
            { id: 1 },
            "secretKey",
            {
              expiresIn: "1h",
            },
            { algorithm: "RS256" }
          );
          res.json([hash, token]);
        }
      });
    });
  },

  // login: (req, res) => {
  //   const decodedToken = jwt.verify(req.body["Authorization"], "secretKey");
  //   console.log(decodedToken);
  },
};
