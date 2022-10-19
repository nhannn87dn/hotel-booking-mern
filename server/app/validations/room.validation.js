const Joi = require('joi');
const {objectId, dateFormat} = require('./custom.validation');

const getRoomBySlug = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
};


const getRoom = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const uploadImages = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const removeImage = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
  body: Joi.object().keys({
    imagesId: Joi.string().required().custom(objectId),
  }),
};


/* get rooms with guestCapacity, category , keyword at Admin*/
const getRooms = {
  query: Joi.object().keys({
    guestCapacity: Joi.number().optional(),
    category: Joi.string().optional(),
    keyword: Joi.string().optional(),
    page: Joi.number().optional().default(1),
  }),
};

//TODO sort by Price ACS, DESC
const searchAvailableRooms = {
  body: Joi.object().keys({
    guestCapacity: Joi.number().required(),
    numOfRooms: Joi.number().required().default(1),
    checkInDate: Joi.string().required().custom(dateFormat),
    checkOutDate: Joi.string().required().custom(dateFormat),
    roomId: Joi.string().optional().custom(objectId),
  }),
  query: Joi.object().keys({
    page: Joi.number().optional().default(1),
    sortBy: Joi.string().optional().valid("pricePerNight").default("pricePerNight"),
    sortType: Joi.string().optional().valid("ASC","DESC").default('ASC'),
  }),
};

const checkAvailableRoomById = {
  query: Joi.object().keys({
    guestCapacity: Joi.number().required(),
    numOfRooms: Joi.number().required().default(1), 
    checkInDate: Joi.string().required().custom(dateFormat),
    checkOutDate: Joi.string().required().custom(dateFormat),
  }),
};


const createRoom = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required("Please enter room name"),
    shortDesc: Joi.string().max(255).optional(),
    numOfRooms: Joi.number().required().default(1),
    numOfAdults: Joi.number().required().default(1),
    numOfChildren: Joi.number().optional().default(0),
    metaTitle: Joi.string().max(60).optional().default(""),
    metaDescription: Joi.string().max(160).optional().default(""),
    pricePerNight: Joi.number().min(0).required().default(0),
    priceChildren: Joi.number().min(0).max(Joi.ref('pricePerNight')).required().default(0),
    isPromote: Joi.boolean().default(false),
    pricePromote: Joi.number().min(0).max(Joi.ref('pricePerNight')).default(0),
    promoteStartDate: Joi.string().optional(),
    promoteEndDate: Joi.string().optional(),
    content: Joi.string().optional(),
    guestCapacity: Joi.number().required().default(0),
    numOfBeds: Joi.number().required().default(0),
    typeOfBeds: Joi.string().required().default(""),
    area: Joi.string().required().default(0),
    attributes: Joi.array().default([]),
    ratings: Joi.number().default(0),
    numOfReviews: Joi.number().default(0),
    images: Joi.array().default([]),
    category: Joi.string()
      .required()
      .valid(
        "Standard",
        "Superior",
        "Deluxe",
        "Suite",
        "Single",
        "Twin",
        "Double",
        "Triple",
        "Family"
      )
      .default("Standard"),
    reviews: Joi.array().default([]),
    user: Joi.string().optional().custom(objectId),
  }),
};

const updateRoom = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).optional(),
    shortDesc: Joi.string().max(255).optional(),
    numOfRooms: Joi.number().optional(),
    numOfAdults: Joi.number().optional(),
    numOfChildren: Joi.number().optional(),
    metaTitle: Joi.string().max(60).optional(),
    metaDescription: Joi.string().max(160).optional(),
    pricePerNight: Joi.number().optional(),
    priceChildren: Joi.number().min(0).max(Joi.ref('pricePerNight')).optional(),
    isPromote: Joi.boolean().valid(true, false).default(false).optional(),
    pricePromote: Joi.number().min(0).max(Joi.ref('pricePerNight')).optional(),
    promoteStartDate: Joi.string().optional(),
    promoteEndDate: Joi.string().optional(),
    content: Joi.string().optional(),
    guestCapacity: Joi.number().optional(),
    numOfBeds: Joi.number().optional(),
    typeOfBeds: Joi.string().optional(),
    area: Joi.number().optional(),
    attributes: Joi.array().optional(),
    ratings: Joi.number().optional(),
    numOfReviews: Joi.number().optional(),
    images: Joi.array().optional(),
    category: Joi.string()
      .optional()
      .valid(
        "Standard",
        "Superior",
        "Deluxe",
        "Suite",
        "Single",
        "Twin",
        "Double",
        "Triple",
        "Family"
      )
      .default("Standard"),
      reviews: Joi.array().optional(),
      customer: Joi.string().optional().custom(objectId),
  }),
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteRoom = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  getRoom,
  getRoomBySlug,
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  uploadImages,
  removeImage,
  searchAvailableRooms,
  checkAvailableRoomById
};
