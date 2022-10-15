const express = require("express");
const router = express.Router();
const { roomController } = require("../../app/controllers");
const { roomValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role, multerSize } = require("../../app/utils");
var multer = require("multer");
const multerConfig = require("../../config/multer");
const config = require("../../config/config");
/**
 *  Required Frontend Form Upload
 * Content-Type: multipart/form-data
 * <input type="file" name="images" />
 *  */
const upload = multer({
  onError: function (err, next) {
    next(err);
  },
  storage: multerConfig.storageImages,
  limits: { fileSize: multerSize.strToBytes(config.upload.imgMaxSize) },
  fileFilter: multerConfig.imageFilter,
}).array("images", 10);
/**
 *  Public Requests
 */

// @GET:  /api/v1/rooms/list
router.get("/list", validate(roomValidation.getRooms), roomController.getRooms);

// Search Rooms
// @POST:  /api/v1/rooms/search
router.post(
  "/search",
  validate(roomValidation.searchAvailableRooms),
  roomController.searchAvailableRooms
);

// @GET:  /api/v1/rooms/:id/details
router.get(
  "/:id/details",
  validate(roomValidation.getRoom),
  roomController.getRoom
);

//Check rooms available by RoomID

// @POST:  /api/v1/rooms/:id/available 
router.post(
  "/:id/available",
  validate(roomValidation.checkAvailableRoomById),
  roomController.searchAvailableRooms
);
/**
 *  Private Requests
 */

// @GET:  /api/v1/rooms
router.get(
  "/",
  auth,
  authorize([role.admin, role.booking]),
  validate(roomValidation.getRooms),
  roomController.getRooms
);

// @GET:  /api/v1/rooms/:id
router.get(
  "/:id",
  auth,
  authorize([role.admin, role.booking]),
  validate(roomValidation.getRoom),
  roomController.getRoom
);


// @POST:  /api/v1/rooms
router.post(
  "/",
  auth,
  authorize(role.admin),
  validate(roomValidation.createRoom),
  roomController.createRoom
);


// @PUT:  /api/v1/rooms:id
router.put(
  "/:id",
  auth,
  authorize([role.admin, role.booking]),
  validate(roomValidation.updateRoom),
  roomController.updateRoom
);

// @DELETE:  /api/v1/room/:id
router.delete(
  "/:id",
  auth,
  authorize(role.admin),
  validate(roomValidation.deleteRoom),
  roomController.deleteRoom
);

/* Update images for room */
// @POST:  /api/v1/rooms/:id/images-upload
router.post(
  "/:id/images-upload",
  auth,
  authorize(role.admin),
  upload,
  validate(roomValidation.uploadImages),
  roomController.uploadImages
);

// @put:  /api/v1/rooms/:id/image-remove
router.put(
  "/:id/image-remove",
  auth,
  authorize(role.admin),
  validate(roomValidation.removeImage),
  roomController.removeImage
);

module.exports = router;
