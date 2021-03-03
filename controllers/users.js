const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bycripter = require('../services/bcrypter');
const verify = require("../services/verify");
const response = require("../services/response");


module.exports = {
  create: async (req, res) => {
    const { email, password } = req.body;
    try {
      verify.email(email);
      verify.password(password);
      const hashedPassword = await bycripter.encryptPassword(password);
      const user = await User.create({
        email: email,
        password: hashedPassword
      });
      const token = await jwt.sign(
        { user_id: user._id },
        process.env.JWT_SIGNATURE
      );
      if (token)
        res.json(response.signupResponse(token, "User created successfuly"));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      verify.email(email);
      const user = await User.findOne({email})
      if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bycripter.validatePassword(password, user);
        if (validPassword) {
          const token = await jwt.sign(
            { user_id: user._id },
            process.env.JWT_SIGNATURE
          );
          if (token)
            res.json(response.loginResponse(token, "Login successful"));
        } else {
          throw { code: 400, message: "Invalid Password" };
        }
      } else {
        throw { code: 401, message: "User does not exist" };
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  }
};
