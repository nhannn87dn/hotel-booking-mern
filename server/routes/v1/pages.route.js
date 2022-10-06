const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../../config/multer");
const config = require("../../config/config");
const { uploadValidation } = require("../../app/validations");
const { validate, auth } = require("../../app/middlewares");
const {
  multerSize,
  authorize,
  role,
  AppError,
  requestHandler,
} = require("../../app/utils");
/**
 * For single Page
 */

// @GET:  /api/v1
router.get("/", (req, res, next) => {
  res.status(200).json({
    name: "API NodeJs",
    version: "1.0",
  });
});

/**
 *  Required Frontend Form Upload
 * Content-Type: multipart/form-data
 * <input type="file" name="files[]" />
 *  */
// @POST:  /api/v1/uploads
// @type: image | file

router.post(
  "/uploads/:typeFile",
  auth,
  authorize([role.admin, role.user, role.booking]),
  validate(uploadValidation.uploads),
  (req, res) => {
    let storage = multerConfig.storageFiles;
    let maxSize = multerSize.strToBytes(config.upload.fileMaxSize);
    let fileFilter = multerConfig.fileFilter;
    let returnPath = config.publicUrl + config.upload.file_dir;

    if (req.params.typeFile === "image") {
      storage = multerConfig.storageImages;
      maxSize = multerSize.strToBytes(config.upload.imgMaxSize);
      fileFilter = multerConfig.imageFilter;
      returnPath = config.publicUrl + config.upload.img_dir;
    }

    // 10 is the limit I've defined for number of uploaded files at once
    // 'multiple_images' is the name of our file input field
    let upload = multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: fileFilter,
    }).array("files", 10);

    upload(req, res, function (err) {
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (err instanceof multer.MulterError) {
        throw new AppError(err.message, 400);
      } else if (err) {
        //throw new AppError(err.message, 400);
        console.log(err)
      }

      let uploaded = [];
      const files = req.files;
      let index, len;

      // Loop through all the uploaded images and display them on frontend
      for (index = 0, len = files.length; index < len; ++index) {
        uploaded.push(
          returnPath + files[index].filename
        );
      }

      requestHandler.sendSuccess(res, "successful")({ links: uploaded });
    });
  }
);

module.exports = router;
