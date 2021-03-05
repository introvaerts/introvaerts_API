// Import models
const Subdomain = require('../models/subdomain');
const User = require('../models/user');

// Import services
const response = require('../services/response');

const subdomainsController = {
  create: async (req, res) => {
    try {
      subdomain = await Subdomain.create(req.body);
      user = await User.findOneAndUpdate(
        { _id: req.user_id },
        { $push: { subdomains: subdomain._id } },
        { new: true }
      );
      res.json(
        response.subdomainResponse(
          subdomain,
          `Successfully created subdomain ${subdomain.name}`
        )
      );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  getAllByUser: async (req, res) => {
    const user = await User.findById(req.user_id);
    const subdomains = await Subdomain.find({
      _id: { $in: user.subdomains },
    });
    res.json(subdomains);
  },
};

module.exports = subdomainsController;
