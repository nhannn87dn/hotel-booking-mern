const express = require("express");
const router = express.Router();
const { meController } = require("../../app/controllers");
const { meValidation } = require("../../app/validations");
const { validate, meAuth } = require("../../app/middlewares");



/**
 * Authorized Me/Customer
 */

// @POST:  /api/v1/me/login
router.post("/", validate(meValidation.meLogin), meController.meLogin);


// @POST:  /api/v1/me/verify
router.post("/verify", validate(meValidation.meVerify), meController.meVerify);

// @POST:  /api/v1/me/logout
router.post("/logout", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'logouted'});
});

// @POST:  /api/v1/me/verify_token
router.post("/verify_token", meAuth, meController.meVerifyToken);


// @GET:  /api/v1/me
router.get("/", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me Dashboard'});
});

// @GET:  /api/v1/me/profile
router.get("/profile", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me profile'});
});

// @PUT:  /api/v1/me/profile/:id
router.put("/profile", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me update profile'});
});

// @GET:  /api/v1/me/bookings
router.get("/bookings", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me bookings'});
});

// @GET:  /api/v1/me/bookings/:id
router.get("/bookings/:id", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me bookings detail'});
});

// @PUT:  /api/v1/me/bookings/:id/cancel
router.put("/bookings/:id/cancel", meAuth, (req,res, next)=> {
    res.status(200).send({message: 'me cancel booking by id'});
});



module.exports = router;
