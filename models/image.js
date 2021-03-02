const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  caption: {
    title: String,  
    technique: String,
    year: Number,
    dimensions: String,
  },
  alt_text: String, 
  description: String,
  image_url: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("Image", imageSchema);