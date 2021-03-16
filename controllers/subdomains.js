// Import models
const Subdomain = require('../models/subdomain');
const Gallery = require('../models/gallery');
const User = require('../models/user');

// Import services
const response = require('../services/response');
const convertDotNotation = require('../services/convertDotNotation');
const S3 = require('../services/s3');
const form = require('../services/formParser');

const subdomainsController = {
  create: async (req, res) => {
    try {
      const defaultSubdomain = req.defaultSubdomain;
      const subdomain = defaultSubdomain
        ? await Subdomain.create(defaultSubdomain)
        : await Subdomain.create(req.body);
      user = await User.findOneAndUpdate(
        { _id: req.user_id },
        { $push: { subdomains: subdomain._id } },
        { new: true }
      );
      if (defaultSubdomain) {
        return subdomain._id;
      } else {
        res.json(
          response.create(
            201,
            `Successfully created subdomain ${subdomain.name}`,
            subdomain
          )
        );
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
      const subdomain = await Subdomain.findById(req.params.id);
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
  findByName: async (req, res) => {
    try {
      const subdomain = await Subdomain.findOne({ name: req.params.name });
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
  createDefault: async subdomainName => {
    try {
      const subdomain = await Subdomain.create({ name: subdomainName });
      return subdomain._id;
    } catch (e) {
      throw e;
    }
  },
  publish: async (req, res) => {
    try {
      const subdomainPreview = await Subdomain.findById(req.params.id).lean();
      subdomainPreview.name = subdomainPreview.name.replace('-preview', '');
      const liveId = (await User.findById(req.user_id)).subdomains.find(
        id => id !== req.params.id
      );
      delete subdomainPreview._id;
      const subdomainLive = await Subdomain.findOneAndUpdate(
        { _id: liveId },
        subdomainPreview
      );
      res.json(
        response.create(200, `Successfully published ${subdomainLive.name}`)
      );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  imageUpload: async (req, res) => {
    try {
      const parsedImage = await form.parseImage(req);
      const imageObject = await S3.upload(parsedImage);
      imageObject['about_image_url'] = imageObject['image_url'];
      const subdomain = await Subdomain.findOneAndUpdate(
        { _id: imageObject.subdomain_id },
        {
          about: Object.assign(imageObject),
        },
        { new: true }
      );
      res.json(response.create(204, `Successfully uploaded image`, subdomain));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};

module.exports = subdomainsController;
