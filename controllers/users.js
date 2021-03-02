const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bycripter = require('../services/bcrypter');

module.exports = {
  create: async (req, res) => {
    const { email, password } = req.body;
    try {
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
        res.json({
          status: 'success',
          message: 'User added successfully!',
          token: token,
        });
    } catch (e) {
      res.json({
        code: e.status,
        message: e.message,
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
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
            res.json({
              status: 'success',
              message: 'Login successful!',
              token: token,
            });
        } else {
          res.json({ code: 400, message: "Invalid Password" });
        }
      } else {
        res.json({ code: 401, message: "User does not exist" });
      }
    } catch (e) {
      res.json({
        code: e.status,
        message: e.message,
      });
    }
  }
};
