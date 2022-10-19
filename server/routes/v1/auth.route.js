const express = require("express");
const router = express.Router();
const {authController} = require("../../app/controllers");
const {authValidation} = require("../../app/validations");
const {validate, auth} = require("../../app/middlewares");

/**
 * Authorized User
 */

// @POST:  /api/v1/auth
router.post("/", validate(authValidation.authLogin), authController.authLogin);


// @POST:  /api/v1/auth/verify_token
router.post("/verify_token", auth, authController.VerifyToken);



module.exports = router;