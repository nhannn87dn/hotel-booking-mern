const mongoose = require("mongoose");
const validator = require("validator");
const {generateOTP} = require('../utils/randomString');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const moment = require('moment');

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
        maxlength: 255,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
    },
    birthday :{
      type: Date,
    },            
    mobile: {
        type: String,
        trim: true,
        lowercase: true,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    zipCode: {
        type: Number,
        default: 0
    },
    otp: {
        type: String,
        default: '',
        expires:'5m',
        index:true
    },
    isDelete: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    isBanned: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    isVerifyEmail: {
      type: Date
    },
},
{ timestamps: true }
);


// customerSchema.statics.isEmailTaken = async (email, excludeUserId) => {
//   const customer = await this.findOne({
//     email,
//     _id: {
//       $ne: excludeUserId,
//     },
//   });
//   return !!customer;
// };

// Random Code 
customerSchema.methods.generateCode = function (lengths = 6) {
  return generateOTP(lengths);
}


customerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this.id, email: this.email, mobile: this.mobile},config.jwt.secure_key);
  return token;
}


/* convert YYYY-MM-DD to YYYY-MM-DD 12:00:00*/
customerSchema.pre("save", async function (next) {
  this.birthday = moment.utc(this.birthday).format("YYYY-MM-DD hh:mm:ssZ");
  this.createdAt = moment.utc(this.createdAt).format("YYYY-MM-DD hh:mm:ssZ");
  this.updatedAt = moment.utc(this.updatedAt).format("YYYY-MM-DD hh:mm:ssZ");
  next();
});


const Customer = new mongoose.model("Customer", customerSchema);
module.exports = Customer;