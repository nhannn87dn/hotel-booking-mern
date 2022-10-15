const mongoose = require("mongoose");
const validator = require("validator");


const { Schema } = mongoose;
const settingSchema = new Schema(
{
    appName: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isLength(value, { min: 4, max: 60 })) {
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
        minLength: 4,
        maxLength: 160
    },
    hotline: {
        type: String,
        trim: true,
        lowercase: true,
        maxLength: [255, 'Room name cannot exceed 255 characters']
    },
    telephone: {
        type: String,
        trim: true,
        lowercase: true,
        maxLength: [255, 'Room name cannot exceed 255 characters']
    },
    address: {
        type: String,
        trim: true,
        maxLength: [255, 'Room name cannot exceed 255 characters']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        maxLength: [255, 'Room name cannot exceed 255 characters']
    },
    taxFee: {
        type: Number,
        default: 0,
        min: 0
    }
    
}
);


const Setting = new mongoose.model("Setting", settingSchema);
module.exports = Setting;