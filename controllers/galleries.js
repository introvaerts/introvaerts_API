const Gallery = require('../models/gallery');
const response = require('../services/response');
const S3 = require('../services/s3');
const Image = require('../models/image');
const { addGallery, deleteGallery } = require('./subdomains');
const Subdomain = require('../models/subdomain');




const galleriesController = {
  create: async (req, res) => {
    const { name, subdomainId } = req.body;
    try {
      const gallery = await Gallery.create({ name });
      const subdomain = await addGallery(subdomainId, gallery._id);
      res.json(
        response.create(201, `Gallery created successfully and added to ${subdomain.name}`, gallery)
      );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const gallery = await Gallery.findById(id);
      if(gallery) {
        const images = await Image.find({ "_id": { $in: gallery.images }})
        res.json(response.create(200, 'Found gallery successfully', { gallery: gallery, images: images }));
      } else {
        throw {code: 404, message: "Gallery not found"}
      }
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  addImage: async (galleryId, imageId) => {
    try {
      const gallery = await Gallery.findOneAndUpdate(
        { _id: galleryId },
        { $push: { images: imageId } },
        { new: true }
      );
      return gallery;
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  deleteImage: async (galleryId, imageId) => {
    try {
      const gallery = await Gallery.findOneAndUpdate(
        { _id: galleryId },
        { $pull: { images: imageId } },
        { new: true }
      );
      return gallery;
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  updateName: async (req, res) => {
    const { id } = req.params
    const { name } = req.body;
    try {
      const gallery = await Gallery.findOneAndUpdate(
        { _id: id },
        { $set: { name: name } },
        { new: true }
      );
      res.json(response.create(200, 'Name updated successfully', gallery));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const subdomain = await Subdomain.findOne({ galleries: id })
      const gallery = await Gallery.findById({ _id: id });
      if(gallery) {
        const images = await Image.find({ "_id": { $in: gallery.images }})
        if(images.length) {
          S3.delete(images.map(img => img.image_url))
          await Image.deleteMany({ "_id": { $in: gallery.images }})
        }
        await Gallery.deleteOne({ _id: gallery._id });
        await deleteGallery(subdomain._id, gallery._id)
        res.json(response.create(204, `Successfuly deleted ${gallery.name}`))
      } else {
        throw { code: 404, message: "Gallery doesn't exist" }
      }
    } catch (e) {
      res.json(response.buildError(e))
    }
  }
};

module.exports = galleriesController;
