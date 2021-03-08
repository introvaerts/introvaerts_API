// Import models
const Subdomain = require('../models/subdomain');
const Gallery = require('../models/gallery');
const User = require('../models/user');

// Import services
const response = require('../services/response');
const convertDotNotation = require('../services/convertDotNotation');

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
  update: async (req, res) => {
    try {
      subdomain = await Subdomain.findOneAndUpdate(
        { _id: req.params.id },
        convertDotNotation(req.body),
        {
          new: true,
        }
      );
      res.json(
        response.subdomainUpdate(
          subdomain,
          `Successfully updated ${subdomain.name}`
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
  addGallery: async (subdomainId, galleryId) => {
    try {
      const subdomain = await Subdomain.findOneAndUpdate(
        { _id: subdomainId },
        { $push: { galleries: galleryId } },
        { new: true }
      );
      return subdomain;
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const subdomain = await Subdomain.findById(id);
      if(subdomain) {
        const galleries = await Gallery.find({ "_id": { $in: subdomain.galleries }})
        res.json(response.subdomainResponse(subdomain, galleries, 'Found subdomain successfully'));
      } else {
        throw {code: 404, message: "Subdomain not found"}
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  }
};

module.exports = subdomainsController;
