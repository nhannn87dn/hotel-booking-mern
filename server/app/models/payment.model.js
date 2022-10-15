const mongoose = require("mongoose");
const moment = require('moment');

const { Schema } = mongoose;
const paymentSchema = new Schema(
{
    
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minLength: [3, 'Code must be at least 3 characters'],
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [10, 'Name must be at least 10 characters'],
        maxLength: [255, 'Desc cannot exceed 255 characters']
    },
    desc: {
        type: String,
        trim: true,
        required: true,
        maxLength: [255, 'Desc cannot exceed 255 characters']
    },
    fee: {
        type: Number,
        default: 0
    },
    config: {
        type: String,
        default: "",
    },
    enabled: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    isCod: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    isOnline: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    order: {
        type: Number,
        default: 1
    },
    isDelete: {
        type: Boolean,
        enum: [true, false],
        default: false
    }
},
{ timestamps: true }
);

/* convert GMT +0 */
paymentSchema.pre("save", async function (next) {
    this.createdAt = moment.utc(this.createdAt).format("YYYY-MM-DD hh:mm:ssZ");
    this.updatedAt = moment.utc(this.updatedAt).format("YYYY-MM-DD hh:mm:ssZ");
    next();
  });

const Payment = new mongoose.model("Payment", paymentSchema);
module.exports = Payment;