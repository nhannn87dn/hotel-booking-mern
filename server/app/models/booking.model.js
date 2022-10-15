const mongoose = require('mongoose');
const moment = require('moment');
const {daysBetween} = require("../utils");
const config = require('../../config/config');

const bookingSchema = new mongoose.Schema({
        code: {
            type: String,
            unique: true,
            required: true,
            minLength: [8, "Code must be at least 8 characters"],
            maxLength: [16, "Code cannot exceed 60 characters"],
        },
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
            validate: {
                validator: function(value) {
                  return value > this.checkInDate
                },
                message: props => `${props.value} have must be greater then checkIn Date !`
            },
        },
        pricePerNight: {
            type: Number,
            required: true,
            default: 0,
            min: 0
        },
        priceChildren: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
            validate: {
                validator: function(value) {
                  return value <= this.pricePerNight
                },
                message: props => `${props.value} have must be less than or equal to pricePerNight !`
            },
        },
        serviceCharge: {
            type: Number,
            default: 0,
            min: 0,
        },
        numOfAdults: {
            type: Number,
            required: true,
            default: 1,
            min:1,
        },
        numOfChildren: {
            type: Number,
            default: 0,
            min: 0,
        },
        surCharge: {
            type: Number,
            default: 0,
            min: 0,
        },
        discount: {
            type: Number,
            default: 0,
            min: 0,
            validate: {
                validator: function(value) {
                    return value <= this.pricePerNight
                },
                message: props => `${props.value} have must be less than or equal to pricePerNight !`
            },
        },
        taxFee: {
            type: Number,
            default: 0,
            min: 0,
        },
        totalAmount: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
        daysOfStay: {
            type: Number,
            required: true,
            default: 1,
            min:1,
        },
        paymentInfo: {
            payment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Payment'
            },
            transactionId: {
                type: String
            },
            transactionStatus: {
                type: String
            },
            transactionAt: { 
                type: Date
            },
            paidMoney:{
                type: Number,
                default: 0,
                min: 0
            },
            note: {
                type: String
            }
        },
        status: {
            type: String,
            enum: ["booked", "confirmed", "canceled", "checkedin", "checkedout", "success"],
            default: 'booked'
        },
        
        paymentStatus: {
            type: String,
            enum: ["unpay", "pending", "paid"],
            default: 'unpay'
        },
        note: {
            type: String
        },
        isDelete: {
            type: Boolean,
            enum: [true, false],
            default: false
        },
       
        actions : [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            message: {
                type: String,
                default: ''
            },
            createAt: { 
                type: Date,
                default: Date.now
            },
        }]
        
    },
    { timestamps: true }
);


bookingSchema.statics.makeBookingDate =  (DateStr,isCheckOut = false) => {
    if(!isCheckOut) return new Date(DateStr+" 14:00:00"+config.timezone.offset);
    return new Date(DateStr+" 12:00:00"+config.timezone.offset);
};

/* convert YYYY-MM-DD to YYYY-MM-DD 14:00:00*/
bookingSchema.pre("save", async function (next) {
    
    this.daysOfStay = daysBetween(this.checkInDate,this.checkOutDate);

    this.checkInDate = moment.utc(this.checkInDate).format("YYYY-MM-DD hh:mm:ssZ");
    this.checkOutDate = moment.utc(this.checkOutDate).format("YYYY-MM-DD hh:mm:ssZ");
    
    //TODO calculate totalAmount, taxFee auto
    let subAmount = (this.pricePerNight + this.priceChildren) * this.daysOfStay + this.serviceCharge + this.surCharge - this.discount;
    let taxFee = subAmount * 0.08; //8%
    let totalAmount = subAmount + taxFee;

    console.log(`subAmount: ${subAmount} - daysOfStay: ${this.daysOfStay} - taxFee: ${taxFee}`);

    this.totalAmount = Math.round((totalAmount + Number.EPSILON) * 100) / 100;
    this.taxFee = Math.round((taxFee + Number.EPSILON) * 100) / 100;
    
    this.createdAt = moment.utc(this.createdAt).format("YYYY-MM-DD hh:mm:ssZ");
    this.updatedAt = moment.utc(this.updatedAt).format("YYYY-MM-DD hh:mm:ssZ");
    
    if(this.actions.createAt) this.actions.createAt = moment.utc(this.actions.createAt).format("YYYY-MM-DD hh:mm:ssZ");
    next();
  });
  

const Booking = new mongoose.model("Booking", bookingSchema);
module.exports = Booking;