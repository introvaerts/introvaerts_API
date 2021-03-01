const Subdomain = require("../models/subdomain")

const subdomainsController = {
  getAll: async (req, res) => {
    const subdomains = await Subdomain.find();
    res.json(subdomains)
  }
}

module.exports = subdomainsController;