const mongoose = require("mongoose");
const validator = require("validator");
const {generateOTP} = require('../utils/randomString');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const { Schema } = mongoose;
const customerSchema = new Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
          if (!validator.isLength(value, { min: 4, max: 160 })) {
            throw new Error(
              "Name have must lengths min 4 and max 160 characters"
            );
          }
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
    },
    birthday :{
      type: Date,
      required: true,
    },            
    mobile: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        minLength: [10, 'Address cannot exceed 10 characters']
    },
    address: {
        type: String,
        required: true,
        minLength: [4, 'Address cannot exceed 4 characters']
    },
    avatar: {
        type: String
    },
    country: {
        type: String
    },
    zipCode: {
        type: Number
    },
    otp: {
        type: String,
        expires:'5m',
        index:true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);


customerSchema.statics.isEmailTaken = async (email, excludeUserId) => {
  const customer = await this.findOne({
    email,
    _id: {
      $ne: excludeUserId,
    },
  });
  return !!customer;
};

// Random Code 
customerSchema.methods.generateCode = function (lengths = 6) {
  return generateOTP(lengths);
}


customerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this.id, email: this.email, mobile: this.mobile},config.jwt.secure_key);
  return token;
}


const Customer = new mongoose.model("Customer", customerSchema);
module.exports = Customer;