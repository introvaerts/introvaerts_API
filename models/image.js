const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  caption: {
    title: String,  
    media: String,
    year: String,
    dimensions: String,
  },
  alt_text: String, 
  description: String,
  image_url: {
    type: String, 
    required: [true, "Image url is required"]
  }
}, { versionKey: false });

module.exports = mongoose.model("Image", imageSchema);