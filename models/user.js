const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type:String,
    required: [true, 'Enter an email.'],
    unique: [true, 'That email is already in use.'],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Enter your password.']
  },
  subdomains: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subdomain'
  }], 
}, { versionKey: false });

module.exports = mongoose.model("User", userSchema);