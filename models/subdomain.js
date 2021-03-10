const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subdomainSchema = new Schema({
  name: {
    type: String,
    required: [true, "Subdomain name is required"],
    unique: [true, "Name is already taken"]
  },
  theme: String,
  page_title: String,
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
    first_name: String,
    last_name: String,
    address: {
      street_and_number: String,
      postalcode: String,
      city: String,
      country: String
    },
    phone_number: String,
    business_email: String,
    contact_tagline: String 
  }
}, { versionKey: false });

module.exports = mongoose.model("Subdomain", subdomainSchema);