const { roomService } = require("../services");
const {
  catchAsync,
  AppError,
  requestHandler,
} = require("../utils");

const getRoomBySlug = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const room = await roomService.getRoomBySlug(slug);
  if (!room) throw new AppError("Room not found", 400);

  requestHandler.sendSuccess(res, "successful")(room);
});


const getRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const room = await roomService.getRoom(id);
  if (!room) throw new AppError("Room not found", 400);

  requestHandler.sendSuccess(res, "successful")(room);
});

const searchAvailableRooms = catchAsync(async (req, res) => {
  console.log("searchAvailableRooms",req.body);
  const rooms = await roomService.searchAvailableRooms(req.body,req.query);
  requestHandler.sendSuccess(res, "successful")(rooms);
});

const getRooms = catchAsync(async (req, res) => {
  const rooms = await roomService.getRooms(req.query);
  requestHandler.sendSuccess(res, "successful")(rooms);
});

const createRoom = catchAsync(async (req, res) => {
  const room = await roomService.createRoom(req.body);
  requestHandler.sendSuccess(res, "successful")(room);
});


const updateRoom = catchAsync(async (req, res) => {
    const id = req.params.id;
    const room = await roomService.updateRoom(id, req.body);
    requestHandler.sendSuccess(res, "successful")(room);
});

const deleteRoom = catchAsync(async (req, res) => {
  const id = req.params.id;
  const room = await roomService.deleteRoom(id);
  requestHandler.sendSuccess(res, "successful")(room);
});


const uploadImages = catchAsync(async (req, res) => {
    const roomId = req.params.id;
    /* update images for room */
    const links = await roomService.uploadImages(roomId,req.files);
    requestHandler.sendSuccess(res, "successful")(links);
  });

  const removeImage = catchAsync(async (req, res) => {
    const roomId = req.params.id;
    /* update images for room */
    const links = await roomService.removeImage(roomId,req.imagesId);
    requestHandler.sendSuccess(res, "successful")(links);
  });

  
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

};
