const { Room } = require("../models");
const AppError = require("../utils/AppError");

const getRoom = async (id) => {
  const room = await Room.findById(id);
  return room;
};

/* Client search Rooms */
const searchRooms = async (query) => {
  const filtered = await Room.find({
    $and: [
      { guestCapacity: query.guest },
      { category: query.category },
    ],
  });
  return filtered;
};

const getRooms = async (query) => {
  let pageNumber = query.page ? parseInt(query.page) : 1;
  const pageSize = 25; // number records per a page

  const keyword = query.keyword
    ? {
        $or: [
          { name: { $regex: query.keyword, $options: "i" } },
          { description: { $regex: query.keyword, $options: "i" } },
        ],
      }
    : {};

  const guestCapacity = query.guest
    ? { guestCapacity: query.guest }
    : {};

  const category = query.category ? { category: query.category } : {};

  const count = await Room.countDocuments({
    ...keyword,
    ...category,
    ...guestCapacity,
  });

  const allRooms = await Room.find({
    ...keyword,
    ...category,
    ...guestCapacity,
  })
    .select("-__v")
    .sort({ name: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = allRooms.length;

  return [
    {
      pageSize,
      pageNumber,
      totalPages: Math.ceil(count / pageSize),
      count,
      filteredCount,
      allRooms,
    },
  ];
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

//TODO delete all booking have room Id
const deleteRoom = async (id) => {
  const room = await getRoom(id);
  if (!room) {
    throw new AppError("Room not Found", 400);
  }
  const result = await room.remove({ _id: room._id });
  return result;
};

module.exports = {
  searchRooms,
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
};
