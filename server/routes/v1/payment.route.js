const express = require("express");
const router = express.Router();
const { paymentController } = require("../../app/controllers");
const { paymentValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");

/**
 *  Public Requests
 */

// @GET:  /api/v1/payments/list
router.get("/list", paymentController.getPaymentList);

// @GET:  /api/v1/payments/:id/details
router.get(
  "/:id/details",
  validate(paymentValidation.getPayment),
  paymentController.getPayment
);

/**
 *  Private Requests
 */

// @GET:  /api/v1/payments
router.get("/", auth, authorize(role.admin), paymentController.getPayments);

// @GET:  /api/v1/payments/:id
router.get(
  "/:id",
  auth,
  authorize(role.admin),
  validate(paymentValidation.getPayment),
  paymentController.getPayment
);

// @POST:  /api/v1/payments
router.post(
  "/",
  auth,
  authorize(role.admin),
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);


// @PUT:  /api/v1/payments/:id
router.put(
  "/:id",
  auth,
  authorize(role.admin),
  validate(paymentValidation.updatePayment),
  paymentController.updatePayment
);

// @DELETE:  /api/v1/payment/:id
router.delete(
  "/:id",
  auth,
  authorize(role.admin),
  validate(paymentValidation.deletePayment),
  paymentController.deletePayment
);


module.exports = router;
