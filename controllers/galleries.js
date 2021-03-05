const Gallery = require('../models/gallery');
const response = require('../services/response');
const S3 = require('../services/s3');
const Image = require('../models/image');




const galleriesController = {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const gallery = await Gallery.create({ name });
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
    const { galleryId } = req.params
    const { name } = req.body;
    try {
      const gallery = await Gallery.findOneAndUpdate(
        { _id: galleryId },
        { $set: { name: name } },
        { new: true }
      );
      res.json(response.galleryResponse(gallery, 'Name updated successfully'));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  delete: async (req, res) => {
    try {
      const { galleryId } = req.params;
      const gallery = await Gallery.findById({ _id: galleryId });
      const images = await Image.find({ "_id": { $in: gallery.images }})
      S3.delete(images.map(img => img.image_url))
      await Image.deleteMany({ "_id": { $in: gallery.images }})
      await Gallery.deleteOne({ _id: gallery._id });
      res.json(response.deleteGallery(`Successfuly deleted ${gallery.name} ` ))
    } catch (e) {
      res.json(response.buildError(e))
    }
  }
};

module.exports = galleriesController;
