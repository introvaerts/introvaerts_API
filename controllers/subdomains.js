const Subdomain = require('../models/subdomain');
const User = require('../models/user');

const subdomainsController = {
  getAllByUser: async (req, res) => {
    const user = await User.findById(req.user_id);
    const subdomains = await Subdomain.find({
      _id: { $in: user.subdomains },
    });
    res.json(subdomains);
  },
};

module.exports = subdomainsController;
