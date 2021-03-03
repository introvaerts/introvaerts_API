// Import models
const Image = require('../models/image');
const Gallery = require('../models/gallery');

// Import services
const imageUploader = require('../services/imageUploader');
const Form = require('../services/formParser');

const imagesController = {
  upload: async (req, res) => {
    try {
      const parsedImage = await Form.parseImage(req);
      const imageObject = await imageUploader(parsedImage);
      const image = await Image.create(imageObject);
      const gallery = await Gallery.findOneAndUpdate(
        { _id: imageObject.gallery_id },
        { $push: { images: image._id } }
      );
      console.log(image);
      res.json({
        status: 201,
        message: `Successfully uploaded and added to gallery ${gallery.name}`,
        image: image,
      });
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = imagesController;
