const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "3 Character is required min.."],
    },
    lastname: {
      type: String,
      minlength: [3, "3 Character is required min.."],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color is required Must fill"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate number must be fill.."],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "Minimum is 1 "],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },
  location:{
    lat:{
        type:Number,
    },
    lng:{
        type:Number
    }
  }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}



const captainModel = mongoose.model('captaion',captainSchema);

module.exports = captainModel;