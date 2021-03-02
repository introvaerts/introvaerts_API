const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subdomainSchema = new Schema({
  name: {
    type: String,
    required: [true, "Subdomain name is required"],
    unique: [true, "Name is already taken"]
  },
  theme: {
    type: String,
    required: [true, "Theme is required"]
  },
  page_title: {
    type: String,
    required: [true, "Page title is required"]
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
      required: [true, "First name is required"]
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"]
    },
    address: {
      street_and_number: {
        type: String,
        required: [true, "Street name and Number are required"]
      },
      postalcode: {
        type: String,
        required: [true, "Postal Code is required"]
      },
      city: {
        type: String,
        required: [true, "City is required"]
      },
      country: {
        type: String,
        required: [true, "Country is required"]
      }
    },
    contact_tagline: String, 
  }
});

module.exports = mongoose.model("Subdomain", subdomainSchema);