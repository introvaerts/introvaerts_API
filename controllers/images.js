// Import models
const Image = require('../models/image');

// Import services
const imageUploader = require('../services/imageUploader');
const Form = require('../services/formParser');
const response = require("../services/response")

const imagesController = {
  upload: async (req, res) => {
    try {
      const buffers = await Form.parseImage(req, res);
      const imageUrls = await imageUploader(buffers);

      const imageObjects = imageUrls.map(imageUrl => {
        return { image_url: imageUrl };
      });
      const images = await Image.insertMany(imageObjects);
      res.json(response.uploadImage(images, "Successfully uploaded image."));
    } catch (e) {
      res.json(response.buildError(e));
    }
  },
};

module.exports = imagesController;
