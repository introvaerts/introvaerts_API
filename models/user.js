const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type:String,
    required: [true, 'Enter a email.'],
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
});

module.exports = mongoose.model("User", userSchema);