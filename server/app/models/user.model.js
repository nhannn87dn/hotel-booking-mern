const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const moment = require('moment');

const { Schema } = mongoose;
const userSchema = new Schema(
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
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (
          !validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
        ) {
          throw new Error("Password invalid formats");
        }
      },
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "booking", "user"],
      default: "user",
      trim: true,
    },
    isEmailVerified: {
      type: Boolean,
      enum: [true, false],
      default: false,
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
  },
  { timestamps: true }
);

// Usage: Model.isEmailTaken()
userSchema.statics.isEmailTaken = async (email, excludeUserId) => {
  const user = await this.findOne({
    email,
    _id: {
      $ne: excludeUserId,
    },
  });
  return !!user;
};

// Usage: user.invalidPassword()
userSchema.methods.invalidPassword = function (req_password, user_password) {
  return bcrypt.compare(req_password, user_password);
};

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this.id, email: this.email, role: this.role},config.jwt.secure_key);
  return token;
}

// Virtual for this genre instance URL.
userSchema.virtual("url").get(function () {
  return "/users/" + this._id;
});


userSchema.pre("save", async function (next) {
  const rounds = 10; // what you want number for round password
  const hash = await bcrypt.hash(this.password, rounds);
  this.password = hash;

  this.createdAt = moment.utc(this.createdAt).format("YYYY-MM-DD hh:mm:ssZ");
  this.updatedAt = moment.utc(this.updatedAt).format("YYYY-MM-DD hh:mm:ssZ");

  next();
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
