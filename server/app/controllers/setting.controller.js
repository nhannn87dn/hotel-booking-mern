const { settingService } = require("../services");
const {
  catchAsync,
  AppError,
  requestHandler,
} = require("../utils");

const getSetting = catchAsync(async (req, res) => {
  const setting = await settingService.getSetting();
  if (!setting) throw new AppError("Setting not found", 400);
  requestHandler.sendSuccess(res, "successful")(setting);
});

const updateSetting = catchAsync(async (req, res) => {
    const setting = await settingService.updateSetting(req.body);
    requestHandler.sendSuccess(res, "successful")(setting);
});


module.exports = {
  getSetting,
  updateSetting
};
