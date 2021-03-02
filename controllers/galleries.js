const Gallery = require("../models/gallery")

const galleriesController = {
  getAll: async (req, res) => {
    const galleries = await Gallery.find();
    res.json(galleries)
  }
}

module.exports = galleriesController;