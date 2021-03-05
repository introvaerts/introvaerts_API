const bcrypt = require('bcrypt');

module.exports = {
  encryptPassword: async password => {
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
    return hashedPassword;
  },
  validatePassword: async (password, user) => {
    return await bcrypt.compare(password, user.password)
  }
};
