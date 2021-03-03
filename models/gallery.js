const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  name: {
    type: String,
    required: [true, "Gallery name is required"]
  },
  images: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Image'
  }]
}, { versionKey: false });

module.exports = mongoose.model("Gallery", gallerySchema);