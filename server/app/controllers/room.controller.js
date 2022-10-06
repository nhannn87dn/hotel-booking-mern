const {roomService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const requestHandler = require("../utils/requestHandler");
const multer = require("multer");
const multerConfig = require("../../config/multer");
const config = require("../../config/config");
const multerSize = require("../utils/multerSize");


const getRoom = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const room = await roomService.getRoom(id);
    if(!room) throw new AppError('Room not found',400);
    requestHandler.sendSuccess(res,'successful')({room});
});


const searchRooms = catchAsync(async (req, res)=> {
    const rooms = await roomService.searchRooms(req.query);
    requestHandler.sendSuccess(res,'successful')({rooms});
});

const getRooms = catchAsync(async (req, res)=> {
    const rooms = await roomService.getRooms(req.query);
    requestHandler.sendSuccess(res,'successful')({rooms});
});

const createRoom = catchAsync(async (req, res)=> {
    console.log(req.body);
    /**
     *  Required Frontend Form Upload
     * Content-Type: multipart/form-data
     * <input type="file" name="images" />
     *  */ 
    let upload = multer({
        storage: multerConfig.storageImages,
        limits: { fileSize: multerSize.strToBytes(config.upload.imgMaxSize) },
        fileFilter: multerConfig.imageFilter,
    }).array("images", 10);
    
    var links = [];

    upload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.send(req.fileValidationError);
        } else if (err instanceof multer.MulterError) {
          return res.send(err);
        } else if (err) {
          return res.send(err);
        }
    
       
        const files = req.files;
        let index, len;
    
        // Loop through all the uploaded images and push to links array
        for (index = 0, len = files.length; index < len; ++index) {
            links.push(config.publicUrl+config.upload.img_dir+files[index].filename);
        }
    });
    /* overwrite images properties at req.body */
    const body = {... req.body, images: links}
    const room = await roomService.createRoom(body);
    requestHandler.sendSuccess(res,'successful')({room});
});

const updateRoom = catchAsync(async (req, res)=> {
    const room = await roomService.updateRoom(id,req.body);
    requestHandler.sendSuccess(res,'successful')({room});
});

const deleteRoom = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const room = await roomService.deleteRoom(id);
    requestHandler.sendSuccess(res,'successful')({room});
});


module.exports = {
    getRoom,
    getRooms,
    searchRooms,
    createRoom,
    updateRoom,
    deleteRoom

}