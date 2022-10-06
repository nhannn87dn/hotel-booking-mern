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


router.post("/refresh-token/:id", (req,res, next)=> {
    res.status(200).send({message: 'refresh-token'});
});

// @POST:  /api/v1/auth/logout
router.post("/logout", (req,res, next)=> {
    res.status(200).send({message: 'logouted'});
});

//TODO: verifyToken 

module.exports = router;