const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getRoom = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

/* get rooms with guestCapacity, category , keyword at Admin*/
const getRooms = {
  params: Joi.object().keys({
    guest: Joi.number().optional(),
    category: Joi.string().optional(),
    keyword: Joi.string().optional(),
  }),
};

/* Search rooms with guestCapacity, category at Client */
const searchRooms = {
  params: Joi.object().keys({
    guest: Joi.number().required(),
    category: Joi.string().required(),
  }),
};


const createRoom = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required("Please enter room name"),
    metaTitle: Joi.string().max(60).optional().default(""),
    metaDescription: Joi.string().max(160).optional().default(""),
    pricePerNight: Joi.number().required().default(0),
    priceChildren: Joi.number().required().default(0),
    isPromote: Joi.boolean().default(false),
    pricePromote: Joi.number().default(0),
    promoteStartDate: Joi.string().optional(),
    promoteEndDate: Joi.string().optional(),
    content: Joi.string().optional(),
    guestCapacity: Joi.number().required().default(0),
    numOfBeds: Joi.number().required().default(0),
    typeOfBeds: Joi.string().required().default(""),
    area: Joi.number().required().default(0),
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
      customer: Joi.string().optional().custom(objectId),
  }),
};

const updateRoom = {
  body: Joi.object().keys({
    name: Joi.string().min(4).max(160).required(),
    metaTitle: Joi.string().max(60).optional().default(""),
    metaDescription: Joi.string().max(160).optional().default(""),
    pricePerNight: Joi.number().required().default(0),
    priceChildren: Joi.number().required().default(0),
    isPromote: Joi.boolean().default(false),
    pricePromote: Joi.number().default(0),
    promoteStartDate: Joi.string().optional(),
    promoteEndDate: Joi.string().optional(),
    content: Joi.string().optional(),
    guestCapacity: Joi.number().required().default(0),
    numOfBeds: Joi.number().required().default(0),
    typeOfBeds: Joi.string().required().default(""),
    area: Joi.number().required().default(0),
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
  getRooms,
  searchRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
