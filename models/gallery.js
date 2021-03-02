const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Image'
  }]
});

module.exports = mongoose.model("Gallery", gallerySchema);