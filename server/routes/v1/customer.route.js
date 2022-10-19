const express = require("express");
const router = express.Router();
const { customerController } = require("../../app/controllers");
const { customerValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");

/**
 *  Private Requests
 */

// @GET:  /api/v1/customers
router.get("/", auth, authorize(role.admin), customerController.getCustomers);

// @GET:  /api/v1/customers/:id
router.get(
  "/:id",
  auth,
  authorize([role.admin, role.customer, role.booking]),
  validate(customerValidation.getCustomer),
  customerController.getCustomer
);

// @POST:  /api/v1/customers
router.post(
  "/",
  auth,
  authorize([role.admin, role.booking]),
  validate(customerValidation.createCustomer),
  customerController.createCustomer
);

// @PUT:  /api/v1/customers/:id
router.put(
  "/:id",
  auth,
  authorize([role.admin, role.booking]),
  validate(customerValidation.updateCustomer),
  customerController.updateCustomer
);

// @DELETE:  /api/v1/customers/:id
router.delete(
  "/:id",
  auth,
  authorize(role.admin),
  validate(customerValidation.deleteCustomer),
  customerController.deleteCustomer
);

module.exports = router;
