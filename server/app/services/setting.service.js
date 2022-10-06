const {Setting} = require('../models');
const AppError = require('../utils/AppError');
const _ = require('lodash');


const getSetting = async (id)=> {
    const setting = await Setting.findById(id);
    return setting;
};


const getSettings = async (pageNumber)=> {

    let pageSize = 25; // number records per a page
  
    const settings = await Setting.find()
      .select('-__v')
      .sort({_id:-1})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
   
    return settings;
};


const createSetting = async (SettingBody)=> {
    const setting = await Setting.create(SettingBody);
    return setting;
};

const updateSetting = async (id,SettingBody)=> {
    const setting = await getSetting(id);
    if(!setting){
        throw new AppError('Setting not Found', 400);
    }

    Object.assign(setting,SettingBody); //overwrite, with password hash
    const result = await setting.save();
    return result;
}


module.exports = {
    getSettings,
    getSetting,
    createSetting,
    updateSetting,
};
