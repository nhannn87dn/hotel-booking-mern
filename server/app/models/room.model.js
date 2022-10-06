const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const roomSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characters']
    },
    metaTitle: {
        type: String,
        trim: true,
        maxLength: [60, 'Room name cannot exceed 60 characters'],
        required: [true, 'Please enter meta Title'],
    },
    metaDescription: {
        type: String,
        trim: true,
        maxLength: [160, 'Room name cannot exceed 160 characters'],
        required: [true, 'Please enter meta Description'],
    },
   
    pricePerNight: {
        type: Number,
        required: [true, 'Please enter room price per night'],
        default: 0.0
    },
    priceChildren: {
        type: Number,
        required: [true, 'Please enter room price per night for Children'],
        default: 0.0
    },

    isPromote: {
        type: Boolean,
        default: false
    },
    pricePromote: {
        type: Number,
        default: 0.0
    },
    promoteStartDate: {
        type: Date
    },
    promoteEndDate: {
        type: Date
    },
    content: {
        type: String,
        trim: true
    },
   
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please enter number of beds in room'],
    },
    typeOfBeds: {
        type: String,
        required: [true, 'Please enter the number of each type of bed in the room'],
    },
    area: {
        type: String,
        required: [true, 'Please enter area of room'],
        default: ''
    },
    attributes: [{
        internet: {
            type: Boolean,
            default: true,
        },
        breakfast: {
            type: Boolean,
            default: false,
        },
        airConditioned: {
            type: Boolean,
            default: true,
        },
        petsAllowed: {
            type: Boolean,
            default: false,
        },
        roomCleaning: {
            type: Boolean,
            default: true,
        },
        miniBar: {
            type: Boolean,
            default: false,
        },
        launDry: {
            type: Boolean,
            default: false,
        },
        hairDryer: {
            type: Boolean,
            default: true,
        },
        telephone: {
            type: Boolean,
            default: true,
        },
        swimmingPool: {
            type: Boolean,
            default: false,
        },
        balcony: {
            type: Boolean,
            default: false,
        },
        smokeAllowed: {
            type: Boolean,
            default: false,
        },
        view: {
            type: String,
            required: false
        }
    }],
    
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: [
                'Standard',
                'Superior',
                'Deluxe',
                'Suite',
                'Single',
                'Twin',
                'Double',
                'Triple',
                'Family'
            ],
            message: 'Please select correct category for room'
        }
    },
    reviews: [
        {
            customer: {
                type: mongoose.Schema.ObjectId,
                ref: 'Customer',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    sortOrder: {
        type: Number,
        default: 1
    },
   
  },
  { timestamps: true }
);


const Room = new mongoose.model("Room", roomSchema);
module.exports = Room;
