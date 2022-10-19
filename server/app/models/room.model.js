const mongoose = require("mongoose");
const moment = require('moment');
const slugify = require('slugify');

const { Schema } = mongoose;
const roomSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        minLength: [4, 'Name must be at least 4 characters'],
        maxLength: [160, 'Room name cannot exceed 160 characters']
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        maxLength: [255, 'slug cannot exceed 255 characters']
    },
    isHot: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    shortDesc: {
        type: String,
        maxLength: [255, 'shortDesc name cannot exceed 255 characters']
    },
    numOfRooms: {
        type: Number,
        default: 1,
        min: 1,
        required: [true, 'Please enter number of room in type Room'],
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
        default: 0,
        min: 0
    },
    priceChildren: {
        type: Number,
        required: [true, 'Please enter room price per night for Children'],
        default: 0,
        min: 0,
        validate: {
            validator: function(value) {
                return value <= this.pricePerNight
            },
            message: props => `${props.value} have must be less than or equal to pricePerNight !`
        },
    },

    isPromote: {
        type: Boolean,
        enum: [true, false],
        default: false
    },
    pricePromote: {
        type: Number,
        default: 0.0,
        min: 0,
        validate: {
            validator: function(value) {
                return value < this.pricePerNight
            },
            message: props => `${props.value} have must be less than pricePerNight !`
        },
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
        default: 1,
        min: 1,
        required: [true, 'Please enter room guest capacity'],
    },
    numOfBeds: {
        type: Number,
        default: 1,
        min: 1,
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
            enum: [true, false],
            default: true,
        },
        breakfast: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        airConditioned: {
            type: Boolean,
            enum: [true, false],
            default: true,
        },
        petsAllowed: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        roomCleaning: {
            type: Boolean,
            enum: [true, false],
            default: true,
        },
        miniBar: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        launDry: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        hairDryer: {
            type: Boolean,
            enum: [true, false],
            default: true,
        },
        telephone: {
            type: Boolean,
            enum: [true, false],
            default: true,
        },
        swimmingPool: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        balcony: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
        smokeAllowed: {
            type: Boolean,
            enum: [true, false],
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
    images: [{
        link: {
            type: String
        },
    }],
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
        enum: [true, false],
        default: false
    },
    sortOrder: {
        type: Number,
        default: 1,
        min: 1,
    },
   
  },
  { timestamps: true }
);

/* convert GMT +0 */
roomSchema.pre("save", async function (next) {
    if(this.slug == ""){
        this.slug = slugify(this.name);
    }
    this.createdAt = moment.utc(this.createdAt).format("YYYY-MM-DD hh:mm:ssZ");
    this.updatedAt = moment.utc(this.updatedAt).format("YYYY-MM-DD hh:mm:ssZ");
    next();
});

const Room = new mongoose.model("Room", roomSchema);
module.exports = Room;
