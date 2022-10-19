const {messageService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const requestHandler = require("../utils/requestHandler");


const getMessage = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const message = await messageService.getMessage(id);
    if(!message) throw new AppError('Message not found',400);
    requestHandler.sendSuccess(res,'successful')(message);
});

const getMessages = catchAsync(async (req, res)=> {
    let pageNumber = req.query.page ? parseInt(req.query.page) : 1;
    const messages = await messageService.getMessages(pageNumber);
    requestHandler.sendSuccess(res,'successful')(messages);
});

const createMessage = catchAsync(async (req, res)=> {
    const message = await messageService.createMessage(req.body);
    requestHandler.sendSuccess(res,'successful')(message);
});

const updateMessage = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const message = await messageService.updateMessage(id,req.body);
    requestHandler.sendSuccess(res,'successful')(message);
});

const deleteMessage = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const message = await messageService.deleteMessage(id);
    requestHandler.sendSuccess(res,'successful')(message);
});

 /** Reply a Message follow Id */
const replyMessage = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const message = await messageService.replyMessage(id,req.body);
    requestHandler.sendSuccess(res,'successful')(message);
});

module.exports = {
    getMessage,
    getMessages,
    createMessage,
    updateMessage,
    deleteMessage,
    replyMessage

}