const express = require("express");
const router = express.Router();
const { bookingController } = require("../../app/controllers");
const { bookingValidation } = require("../../app/validations");
const { validate, auth, meAuth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");
/**
 *  Public Requests
 */

/**
 *  Public Requests
 */

// Get All Bookings by CustomerID
// @GET:  /api/v1/bookings/:customerId/list
router.get(
  "/list",
  meAuth,
  validate(bookingValidation.getBookingsListByCustomer),
  bookingController.getBookingsListByCustomer
);

// Get Details a Bookings by CustomerID
// @GET:  /api/v1/bookings/details/:bookingId
router.get(
  "/details/:bookingId",
  meAuth,
  validate(bookingValidation.getBookingByCustomer),
  bookingController.getBookingByCustomer
);

// @POST:  /api/v1/bookings/create
router.post(
    "/create",
    meAuth,
    validate(bookingValidation.createBooking),
    bookingController.createBooking
  );
  

/**
 *  Private Requests
 */

// @GET:  /api/v1/bookings
router.get(
    "/:id",
    auth,
    authorize([role.admin, role.booking]),
    validate(bookingValidation.getBooking),
    bookingController.getBooking
  );


// @GET:  /api/v1/bookings
router.get(
    "/",
    auth,
    authorize([role.admin, role.booking]),
    validate(bookingValidation.getBookings),
    bookingController.getBookings
  );

  
// @POST:  /api/v1/bookings
router.post(
    "/",
    auth,
    authorize([role.admin, role.booking]),
    validate(bookingValidation.createBooking),
    bookingController.createBooking
  );
  

// @PUT:  /api/v1/bookings/:id
router.put(
    "/:id",
    auth,
    authorize([role.admin, role.booking]),
    validate(bookingValidation.updateBooking),
    bookingController.updateBooking
);
 
// @DELETE:  /api/v1/bookings/:id
router.delete(
    "/:id",
    auth,
    authorize(role.admin),
    validate(bookingValidation.deleteBooking),
    bookingController.deleteBooking
);
 


module.exports = router;
