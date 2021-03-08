const jwt = require('jsonwebtoken');
const response = require('../services/response');

const authenticateUser = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const decodedToken = jwt.verify(token, process.env.JWT_SIGNATURE);
    console.log(decodedToken)
    req.user_id = decodedToken.user_id;
    next();
  } catch (e) {
    res.send(response.buildError(e))
  }
};

module.exports = authenticateUser;
