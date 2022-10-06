const express = require("express");
const router = express.Router();
const { userController } = require("../../app/controllers");
const { userValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");



/**
 *  Public Requests
 */



/**
 *  Private Management
 */

// @GET:  /api/v1/users
router.get("/", auth, authorize(role.admin), userController.getUsers);

// @GET:  /api/v1/users/:id
router.get(
  "/:id",
  auth,
  authorize([role.admin, role.user, role.booking]),
  validate(userValidation.getUser),
  userController.getUser
);

// @POST:  /api/v1/users/:id
router.post(
  "/",
  auth,
  authorize(role.admin),
  validate(userValidation.createUser),
  userController.createUser
);

// @PUT:  /api/v1/users/:id
router.put(
  "/:id",
  auth,
  authorize([role.admin, role.user, role.booking]),
  validate(userValidation.updateUser),
  userController.updateUser
);

// @DELETE:  /api/v1/users/:id
router.delete(
  "/:id",
  auth,
  authorize(role.admin),
  validate(userValidation.deleteUser),
  userController.deleteUser
);

module.exports = router;
