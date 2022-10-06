const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const messageSchema = new Schema(
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
        lowercase: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
          }
        },
    },
    mobile: {
        type: String,
        trim: true,
        required: false,
        lowercase: true,
    },
    content: {
        type: String,
        trim: true,
        required: [true, 'Please enter message content'],
        validate(value) {
            if (!validator.isLength(value, { min: 60, max: 500 })) {
              throw new Error(
                "Content message have must lengths min 60 and max 500 characters"
              );
            }
          },
    },
    isRead: {
      type: Boolean,
      default: false
    },
    adminNote: {
      type: String,
      trim: true,
    },
    replied : [{
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: true
        },
        content: {
          type: String,
          trim: true,
          required: [true, 'Please enter message content'],
        },
        isSendEmail: {
          type: Boolean,
          default: false
        },
        createdAt : {
          type: Date,
          default: Date.now
        }
    }],
},
{ timestamps: true }
);

// Virtual for this genre instance URL.
messageSchema.virtual("url").get(function () {
  return "/messages/" + this._id;
});


const Message = new mongoose.model("Message", messageSchema);
module.exports = Message;