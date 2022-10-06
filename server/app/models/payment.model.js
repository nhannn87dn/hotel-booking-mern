const mongoose = require("mongoose");

const { Schema } = mongoose;
const paymentSchema = new Schema(
{
    
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
        default: 0.0
    },
    config: {
        type: Array
    },
    enabled: {
        type: Boolean,
        default: false
    },
    isCod: {
        type: Boolean,
        default: false
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 1
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);


const Payment = new mongoose.model("Payment", paymentSchema);
module.exports = Payment;