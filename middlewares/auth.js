const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  const decodedToken = jwt.verify(token, process.env.JWT_SIGNATURE);
  req.user_id = decodedToken.user_id;
  next();
};

module.exports = authenticateUser;
