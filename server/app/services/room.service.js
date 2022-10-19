const { Room, Booking } = require("../models");
const AppError = require("../utils/AppError");
const config = require("../../config/config");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");

/**
 * Public Services
 *
 */

const searchAvailableRooms = async (body, query) => {
  const roomId = body.roomId ? { room: body.roomId } : {};
  /* convert Hotel Local Time */
  body.checkInDate = await Booking.makeBookingDate(body.checkInDate);
  body.checkOutDate = await Booking.makeBookingDate(body.checkOutDate,true);

  /* Find booked room in range date with checkInDate -> checkOutDate */
  // https://www.appsloveworld.com/mongodb/100/96/what-should-be-my-mongodb-schema-for-room-booking
  const bookings = await Booking.find({
    ...roomId,
    $or: [
      { checkInDate: { $gte: body.checkInDate, $lte: body.checkOutDate } },
      {
        checkOutDate: { $gte: body.checkInDate, $lte: body.checkOutDate },
      },
      {
        $and: [
          { checkInDate: { $lte: body.checkInDate } },
          { checkOutDate: { $gte: body.checkOutDate } },
        ],
      },
    ],
  }).select("room"); // ObjectId(room)

  // check Available by roomId in range date with checkInDate -> checkOutDate
  if (body.roomId) {
    
    const numBookedByRoomId = bookings.length;
    const infoByRoomId = await Room.findById(body.roomId);
    const numEmptyRooms = infoByRoomId.numOfRooms - numBookedByRoomId;
   
    let roomAvailable = bookings && numEmptyRooms > 0 ? true : false; 
    
    return { roomAvailable };
  }

  /* get roomIds booked */
  const roomIds = bookings.map((b) => b.room);
  
  //Find Empty All Rooms in range date with checkInDate -> checkOutDate

  let pageNumber = query.page ? parseInt(query.page) : 1;
  const pageSize = 25; // number records per a page

  let sortObject = {};
  const sortBy = query.sortBy;
  const sortType = query.sortType && query.sortType === "ASC" ? 1 : -1;
  sortObject[sortBy] = sortType;

  const guestCapacity = body.guestCapacity
    ? { guestCapacity: { $gte: body.guestCapacity } }
    : {};
  
  const numOfRooms = body.numOfRooms
    ? { numOfRooms: { $gte: body.numOfRooms } }
    : {};

 
  const count = await Room.countDocuments({
    _id: { $nin: roomIds },
    ...guestCapacity,
    ...numOfRooms,
    isDelete: false,
  });

  const availableRooms = await Room.find({
    _id: { $nin: roomIds },
    ...guestCapacity,
    ...numOfRooms,
    isDelete: false,
  })
    .select("-isDelete -sortOrder -user -reivews -content -metaTile -metaDescription -__v") //no select
    .sort(sortObject)
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = availableRooms.length;

  return {
    pageSize,
    pageNumber,
    totalPages: Math.ceil(count / pageSize),
    count,
    filteredCount,
    sort: { sortBy: query.sortBy, sortType: query.sortType },
    allRooms: availableRooms
  };
};

const getRoomBySlug = async (slug) => {
  return await Room.findOne({
    slug: slug
  });
};

const getRoom = async (id) => {
  return await Room.findById(id);
};

const getRooms = async (query) => {
  let pageNumber = query.page ? parseInt(query.page) : 1;
  const pageSize = 25; // number records per a page

  const keyword = query.keyword
    ? { name: { $regex: query.keyword, $options: "i" } }
    : {};

  const guestCapacity = query.guestCapacity
    ? { guestCapacity: { $gte: query.guestCapacity } }
    : {};

  const category = query.category ? { category: query.category } : {};

  const isDelete = { isDelete: false };

  const count = await Room.countDocuments({
    ...keyword,
    ...category,
    ...guestCapacity,
    ...isDelete,
  });

  const allRooms = await Room.find({
    ...keyword,
    ...category,
    ...guestCapacity,
    ...isDelete,
  })
    .select("-isDelete -sortOrder -user -reivews -content -metaTile -metaDescription -__v") //no select
    .sort({ name: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = allRooms.length;

  return {
      pageSize,
      pageNumber,
      totalPages: Math.ceil(count / pageSize),
      count,
      filteredCount,
      allRooms,
    }
  ;
};

const createRoom = async (roomBody) => {
  const room = await Room.create(roomBody);
  return room;
};

const updateRoom = async (id, roomBody) => {
  const room = await getRoom(id);
  if (!room) {
    throw new AppError("Room not Found", 400);
  }

  Object.assign(room, roomBody);
  const result = await room.save();
  return result;
};
//TODO soft delete

//TODO delete all booking have room Id
const deleteRoom = async (id) => {
  const room = await getRoom(id);
  if (!room) {
    throw new AppError("Room not Found", 400);
  }
  const result = await room.remove({ _id: room._id });
  return result;
};

const uploadImages = async (roomId, files) => {
  const room = await getRoom(roomId);
  if (!room) {
    throw new AppError("Room not Found", 400);
  }

  const returnPath = "/" + config.upload.img_dir; //absolute path return /upload/images/filename.jpg
  let index, len;
  let links = [];

  // Loop through all the uploaded images and display them on frontend
  for (index = 0, len = files.length; index < len; ++index) {
    room.images.push({ link: returnPath + files[index].filename });
    links.push(returnPath + files[index].filename);
  }

  await room.save();
  return links;
};

/**
 *
 * @param {int} roomId
 * @param {ObjectId} imagesId
 * @returns {Object array}
 */
const removeImage = async (roomId, imagesId) => {
  const room = await getRoom(roomId);
  if (!room) {
    throw new AppError("Room not Found", 400);
  }
  const removeImage = room.images.splice(
    room.images.findIndex((el) => el.id === imagesId),
    1
  );

  /* update images*/
  await room.save();

  /* remove local file */
  const imagePath =
    "public/" + config.upload.img_dir + path.basename(removeImage[0].link);

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error(imagePath, err);
    }
    //file removed
  });

  return removeImage;
};

module.exports = {
  searchAvailableRooms,
  getRooms,
  getRoom,
  getRoomBySlug,
  createRoom,
  updateRoom,
  deleteRoom,
  uploadImages,
  removeImage,
};
