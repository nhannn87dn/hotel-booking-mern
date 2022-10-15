const express = require("express");
const router = express.Router();
const {authController} = require("../../app/controllers");
const {authValidation} = require("../../app/validations");
const {validate} = require("../../app/middlewares");


/**
 * Authorized User
 */

// @POST:  /api/v1/auth
router.post("/", validate(authValidation.authLogin), authController.authLogin);


router.post("/verifyToken", (req,res, next)=> {
    res.status(200).json({message: 'verifyToken'});
});


router.post("/refreshToken", (req,res, next)=> {
    res.status(200).json({message: 'refresh-token'});
});

// @POST:  /api/v1/auth/logout
router.post("/logout", (req,res, next)=> {
    res.status(200).json({message: 'logouted'});
});



module.exports = router;