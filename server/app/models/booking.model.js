const mongoose = require('mongoose');
//const timeZone = require('mongoose-timezone')

const bookingSchema = new mongoose.Schema({
        room: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Room'
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Customer'
        },
        checkInDate: {
            type: Date,
            required: true,
        },
        checkOutDate: {
            type: Date,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
            default: 0
        },
        daysOfStay: {
            type: Number,
            required: true,
            default: 1
        },
        paymentInfo: [{
            id: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
            paidAt: {
                type: Date,
                required: true,
            },
        }],
       
        status: {
            type: String,
            required: true,
            enum: ["booked", "canceled", "checkedin", "checkedout"],
            default: 'booked'
        },
        isDelete: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

//bookingSchema.plugin(timeZone);

const Booking = new mongoose.model("Booking", bookingSchema);
module.exports = Booking;