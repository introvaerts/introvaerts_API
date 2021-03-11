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
      const subdomainName = req.name;
      const subdomain = subdomainName ?
          await Subdomain.create({ name: subdomainName }) :
          await Subdomain.create(req.body);
      user = await User.findOneAndUpdate(
        { _id: req.user_id },
        { $push: { subdomains: subdomain._id } },
        { new: true }
      );
      if (subdomainName) {
        return subdomain._id;
      } else {
        res.json(response.create(201, `Successfully created subdomain ${subdomain.name}`, subdomain));
      }
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
        response.create(
          204,
          `Successfully updated ${subdomain.name}`,
          subdomain
        )
      );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  getAllByUser: async (req, res) => {
    try {
      console.log(req.user_id);
      const user = await User.findById(req.user_id);
      if (user) {
        const subdomains = await Subdomain.find({
          _id: { $in: user.subdomains },
        });
        res.json(response.create(200, 'Found all subdomains', subdomains));
      } else {
        throw { code: 404, message: "User doesn't exist" };
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
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
      throw e;
    }
  },
  deleteGallery: async (subdomainId, galleryId) => {
    try {
      const subdomain = await Subdomain.findOneAndUpdate(
        { _id: subdomainId },
        { $pull: { galleries: galleryId } },
        { new: true }
      );
      return subdomain;
    } catch (e) {
      throw e;
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const subdomain = await Subdomain.findById(id);
      if (subdomain) {
        const galleries = await Gallery.find({
          _id: { $in: subdomain.galleries },
        });
        res.json(
          response.create(200, 'Found subdomain successfully', {
            subdomain: subdomain,
            galleries: galleries,
          })
        );
      } else {
        throw { code: 404, message: 'Subdomain not found' };
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  isAvailable: async (req, res) => {
    try {
      const { name } = req.params;
      const foundSubdomains = await Subdomain.find({
        name: name.toLowerCase(),
      });
      const isAvailable = foundSubdomains.length ? false : true;
      const message = `The name ${name} is ${
        isAvailable ? '' : 'not '
      }available`;
      res.json({ message: message, isAvailable: isAvailable });
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};

module.exports = subdomainsController;
