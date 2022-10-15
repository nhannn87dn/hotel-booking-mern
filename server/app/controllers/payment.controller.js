const { paymentService } = require("../services");
const {
  catchAsync,
  AppError,
  requestHandler,
} = require("../utils");

const getPayment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payment = await paymentService.getPayment(id);
  if (!payment) throw new AppError("Payment not found", 400);
  requestHandler.sendSuccess(res, "successful")({ payment });
});

const getPayments = catchAsync(async (req, res) => {
  const payments = await paymentService.getPayments(req.query);
  requestHandler.sendSuccess(res, "successful")({ payments });
});

const createPayment = catchAsync(async (req, res) => {
  const payment = await paymentService.createPayment(req.body);
  requestHandler.sendSuccess(res, "successful")({ payment });
});


const updatePayment = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payment = await paymentService.updatePayment(id, req.body);
    requestHandler.sendSuccess(res, "successful")({ payment });
});

const deletePayment = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payment = await paymentService.deletePayment(id);
  requestHandler.sendSuccess(res, "successful")({ payment });
});

  
module.exports = {
  getPayment,
  getPayments,
  createPayment,
  updatePayment,
  deletePayment,
};
