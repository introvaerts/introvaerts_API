const Image = require('../models/image');
const multiparty = require('multiparty');

const imagesController = {
  getAll: async (req, res) => {
    console.log('hello');
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) =>
      console.log(error, fields, files)
    );
    const images = await Image.find();
    res.json(images);
  },
};

module.exports = imagesController;
