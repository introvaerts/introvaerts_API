const Image = require("../models/image")

const imagesController = {
  getAll: async (req, res) => {
    const images = await Image.find();
    res.json(images)
  }
}

module.exports = imagesController;