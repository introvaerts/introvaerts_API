const user = require("../models/user")
const User = require("../models/user")

const usersController = {
  getAll: async (req, res) => {
    const users = await User.find();
    res.json(users)
  }
}

module.exports = usersController;