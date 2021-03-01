const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subdomainSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  theme: {
    type: String,
    required: true
  },
  galleries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gallery'
  }], 
  about: {
    about_image_url: String,
    tagline: String,
    description: String,
  },
  contact: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    address: {
      street_and_number: {
        type: String,
        required: true
      },
      postalcode: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
    },
    contact_tagline: String, 
  }
});

module.exports = mongoose.model("Subdomain", subdomainSchema);