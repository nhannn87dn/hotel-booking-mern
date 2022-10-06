const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const otpSchema = new Schema(
{
   
    code: {
        type: String,
        required: true,
        unique: true,
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
    expired: {
        type: Number,
        default: 60
    }
},
{ timestamps: true }
);


const Otp = new mongoose.model("Otp", otpSchema);
module.exports = Otp;