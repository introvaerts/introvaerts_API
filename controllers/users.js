const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('../services/bcrypt');
const verify = require('../services/verify');
const response = require('../services/response');
const Subdomain = require('../models/subdomain');

module.exports = {
  create: async (req, res) => {
    const { email, password } = req.body;
    try {
      verify.email(email);
      verify.password(password);
      const hashedPassword = await bcrypt.encryptPassword(password);
      const user = await User.create({
        email: email,
        password: hashedPassword,
      });
      const token = await jwt.sign(
        { user_id: user._id },
        process.env.JWT_SIGNATURE
      );
      if (token)
        res.json(response.create(201, 'User created successfuly', {token: token}));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      verify.email(email);
      const user = await User.findOne({ email });
      if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.validatePassword(password, user);
        if (validPassword) {
          const token = await jwt.sign(
            { user_id: user._id },
            process.env.JWT_SIGNATURE
          );
          if (token)
            res.json(response.create(200, 'Login successful', { token: token }));
        } else {
          throw { code: 400, message: 'Invalid Password' };
        }
      } else {
        throw { code: 401, message: 'User not found' };
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  getInfo: async (req, res) => {
    try {
      const user = await User.findById(req.user_id);
      if(user) {
        const subdomains = await Subdomain.find({ "_id": { $in: user.subdomains }})
        res.json(response.create(200, 'Successfully found user', { userEmail: user.email, subdomains: subdomains }));
      } else {
        throw { code: 404, message: "User not found" }
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  updateEmail: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate({ _id: req.user_id }, req.body, {
        new: true,
      });
      if(user) {
        res.json(response.create(204, 'successfully updated email', {user: user.email}));
      } else {
        throw { code: 404, message: 'User not found' }
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};
