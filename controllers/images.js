// Import models
const Image = require('../models/image');
const Gallery = require('../models/gallery');

// Import services
const S3 = require('../services/s3');
const form = require('../services/formParser');
const response = require('../services/response');

// Import actions from galleriesController
const { addImage, deleteImage } = require('./galleries');

const imagesController = {
  upload: async (req, res) => {
    try {
      const parsedImage = await form.parseImage(req);
      const imageObject = await S3.upload(parsedImage);
      const image = await Image.create(imageObject);
      const gallery = await addImage(imageObject.gallery_id, image._id);
      res.json(
        response.uploadImage(
          image,
          `Successfully uploaded image and added to ${gallery?.name}`
        )
      );
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
  delete: async (req, res) => {
    try {
      const gallery = await Gallery.find({
        images: req.params.id,
      });
      const image = await Image.findById(req.params.id);
      S3.delete([image.image_url]);
      await Image.deleteOne({ _id: image._id });
      await deleteImage(gallery._id, image._id);
      res.json(response.deleteImage('Image successfully deleted'));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};

module.exports = imagesController;
