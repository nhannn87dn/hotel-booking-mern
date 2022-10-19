const express = require("express");
const router = express.Router();
const { messageController } = require("../../app/controllers");
const { messageValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const { authorize, role } = require("../../app/utils");

/**
 *  Public Requests
 */


// @POST:  /api/v1/messages
router.post(
  "/",
  validate(messageValidation.createMessage),
  messageController.createMessage
);

/**
 *  Private Requests
 */

// @GET:  /api/v1/messages
 router.get("/", auth, authorize(role.admin), messageController.getMessages);

 // @GET:  /api/v1/messages/:id
 router.get(
   "/:id",
   auth,
   authorize([role.admin, role.booking]),
   validate(messageValidation.getMessage),
   messageController.getMessage
 );


// @PUT:  /api/v1/messages/:id
 router.put(
   "/:id",
   auth,
   authorize([role.admin, role.booking]),
   validate(messageValidation.updateMessage),
   messageController.updateMessage
 );

 // @DELETE:  /api/v1/message/:id
 router.delete(
   "/:id",
   auth,
   authorize(role.admin),
   validate(messageValidation.deleteMessage),
   messageController.deleteMessage
 );

 /** Reply a Message follow Id */

 // @POST:  /api/v1/messages/:id/reply
router.post(
  "/:id/reply",
  validate(messageValidation.replyMessage),
  messageController.replyMessage
);


 module.exports = router;