const Gallery = require('../models/gallery');
const response = require('../services/response');

const galleriesController = {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const gallery = await Gallery.create({ name });
      if (gallery)
        res.json(
          response.galleryResponse(gallery, 'Gallery created successfully')
        );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  findOne: async (req, res) => {
    try {
      const { galleryId } = req.params;
      const gallery = await Gallery.findById(galleryId);
      res.json(response.galleryResponse(gallery, 'Found gallery successfully'));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  addImage: async (galleryId, imageId) => {
    console.log(galleryId);
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
    const { galleryId, newName } = req.body;
    try {
      const gallery = await Gallery.findOneAndUpdate(
        { _id: galleryId },
        { $set: { name: newName } },
        { new: true }
      );
      res.json(response.galleryResponse(gallery, 'Name updated successfully'));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};

module.exports = galleriesController;
