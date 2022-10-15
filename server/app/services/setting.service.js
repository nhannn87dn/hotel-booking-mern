const { unset } = require('lodash');
const {Setting} = require('../models');
const AppError = require('../utils/AppError');
const id = "6344224bc762d96362bfce06";

const getSetting = async ()=> {
    const setting = await Setting.findById(id);
    return setting;
};


const updateSetting = async (body)=> {
    const setting = await getSetting(id);
    if(!setting){
        throw new AppError('Setting not Found', 400);
    }

    Object.assign(setting,body); 
    const result = await setting.save();
    return result;
}


module.exports = {
    getSetting,
    updateSetting,
};
