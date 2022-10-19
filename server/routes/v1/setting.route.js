const express = require("express");
const router = express.Router();
const { settingController } = require("../../app/controllers");
const { settingValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");

/**
 *  Public Requests
 */


// @GET:  /api/v1/settings/list
router.get("/list", settingController.getSetting);

/**
 *  Private Requests
 */

// @GET:  /api/v1/settings
 router.get("/", auth, authorize(role.admin), settingController.getSetting);


// @PUT:  /api/v1/settings
 router.put(
   "/",
   auth,
   authorize([role.admin]),
   validate(settingValidation.updateSetting),
   settingController.updateSetting
 );

 module.exports = router;