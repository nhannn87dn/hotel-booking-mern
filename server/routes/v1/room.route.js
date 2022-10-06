const express = require("express");
const router = express.Router();
const { roomController } = require("../../app/controllers");
const { roomValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");

/**
 *  Public Requests
 */

// @GET:  /api/v1/rooms
router.get("/", validate(roomValidation.getRooms), roomController.getRooms);

// Search Rooms
// @GET:  /api/v1/rooms
router.get("/search", validate(roomValidation.searchRooms), roomController.searchRooms);


// @GET:  /api/v1/rooms/:id
router.get(
    "/:id",
    validate(roomValidation.getRoom),
    roomController.getRoom
);
  
  

/**
 *  Private Requests
 */

// @POST:  /api/v1/rooms/admin
router.post(
  "/admin",
  auth,
  authorize(role.admin),
  validate(roomValidation.createRoom),
  roomController.createRoom
);


// @GET:  /api/v1/rooms/admin/:id
router.get(
  "/admin/:id",
  auth,
  authorize([role.admin, role.booking]),
  validate(roomValidation.getRoom),
  roomController.getRoom
);


// @PUT:  /api/v1/rooms/admin/:id
router.put(
  "/admin/:id",
  auth,
  authorize([role.admin, role.booking]),
  validate(roomValidation.updateRoom),
  roomController.updateRoom
);

// @DELETE:  /api/v1/admin/room/:id
router.delete(
  "/admin/:id",
  auth,
  authorize(role.admin),
  validate(roomValidation.deleteRoom),
  roomController.deleteRoom
);


module.exports = router;