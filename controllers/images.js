// Import models
const Image = require('../models/image');
const Gallery = require('../models/gallery');

// Import services
const imageUploader = require('../services/imageUploader');
const form = require('../services/formParser');
const response = require("../services/response")

// Import actions from galleriesController
const { addImage } = require('./galleries')

const imagesController = {
  upload: async (req, res) => {
    try {
      const parsedImage = await form.parseImage(req);
      const imageObject = await imageUploader(parsedImage);
      const image = await Image.create(imageObject);
      console.log(image)
      const gallery = await addImage(imageObject.gallery_id, image._id);
      res.json({
        status: 201,
        message: `Successfully uploaded and added to gallery ${gallery.name}`,
        image: image,
      });
    } catch (e) {
      res.json(response.buildError(e));
    }
  }
};

module.exports = imagesController;
