const multer  = require('multer');
const slugify = require('slugify');
const path = require('path');
const config = require('./config');

const storageImages = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/' + config.upload.img_dir));
    },
    // By default, multer removes file extensions so let's add them back
    // Convert name to friendly filename for SEO
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        let filename = path.basename(file.originalname, ext);
        cb(null, slugify(filename) + '-' + Date.now() + ext);
    }
});

const storageFiles = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/' + config.upload.img_dir));
    },

    // By default, multer removes file extensions so let's add them back
    // Convert name to friendly filename for SEO
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        let filename = path.basename(file.originalname, ext);
        cb(null, slugify(filename) + '-' + Date.now() + ext);
    }
});


const imageFilter  = function(req, file, cb) {
    // Accept images only
    const mimetypeAllow = ["image/png", "image/jpg", "image/gif", "image/jpeg", "image/webp"];
    if (!mimetypeAllow.includes(file.mimetype)) {
        req.fileValidationError = 'Only .png, .gif, .jpg, webp, and .jpeg format allowed!';
        return cb(new Error('Only .png, .gif, .jpg, webp, and .jpeg format allowed!'), false);
    }
    cb(null, true);
};

const fileFilter  = function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|zip|jpeg|doc|docx|png|xls|xlsx|gif|pdf|rar|webp|txt)$/)) {
        req.fileValidationError = 'Only image files ext jpg|zip|jpeg|doc|docx|png|xls|xlsx|gif|pdf|rar|webp|txt are allowed!';
        return cb(new Error('Only image files ext jpg|zip|jpeg|doc|docx|png|xls|xlsx|gif|pdf|rar|webp|txt are allowed!'), false);
    }
    cb(null, true);
};


module.exports = {
    storageImages,
    storageFiles,
    imageFilter,
    fileFilter
}
