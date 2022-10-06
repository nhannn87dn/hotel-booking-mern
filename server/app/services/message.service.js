const {Message} = require('../models');
const AppError = require('../utils/AppError');



const getMessage = async (id)=> {
    const message = await Message.findById(id);
    return message;
};

const getMessages = async (pageNumber)=> {

    const pageSize = 25; // number records per a page
    const totals = await Message.countDocuments();

    const messages = await Message.find()
      .select('-__v')
      .sort({_id:-1})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
   
    const filteredCount = messages.length;

    return [{ pageSize, totals, filteredCount, messages }];
};


const createMessage = async (MessageBody)=> {
    const message = await Message.create(MessageBody);
    return message;
};

const updateMessage = async (id,MessageBody)=> {
    const message = await getMessage(id);
    if(!message){
        throw new AppError('Message not Found', 400);
    }

    Object.assign(message,MessageBody); //overwrite, with password hash
    const result = await message.save();
    return result;
}

const deleteMessage = async(id) =>{
    const message = await getMessage(id);
    if(!message){
        throw new AppError('Message not Found', 400);
    }
    let result = await message.remove({_id: message._id});
    return result;
}

 /** Reply a Message follow Id */
const replyMessage = async (id,replyBody)=> {
    const message = await getMessage(id);
    if(!message){
        throw new AppError('Message not Found', 400);
    }

    /**
     * message.update(
            { _id: message._id }, 
            { $push: { replied: replyBody } },
        );
     */
    message.replied.push(replyBody);
    const result = await message.save();
    /* Send email if marked */
    return result;
};

module.exports = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
    replyMessage
};
