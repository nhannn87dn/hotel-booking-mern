const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const settingSchema = new Schema(
{
    app: [{
        appName: {
            type: String,
            required: true,
            trim: true,
            validate(value) {
              if (!validator.isLength(value, { min: 4, max: 20 })) {
                throw new Error(
                  "Name have must lengths min 4 and max 20 characters"
                );
              }
            },
        },
        metaTitle: {
            type: String,
            trim: true,
            maxLength: [60, 'Room name cannot exceed 60 characters']
        },
        metaDescription: {
            type: String,
            trim: true,
            maxLength: [158, 'Room name cannot exceed 158 characters']
        },
        name: {
            type: String,
            trim: true,
        },
        hotline: {
            type: String,
            trim: true,
            lowercase: true
        },
        address: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true
        },
    }],
    
},
{ timestamps: true }
);


const Setting = new mongoose.model("Setting", settingSchema);
module.exports = Setting;