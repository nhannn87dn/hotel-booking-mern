const { Payment } = require("../models");
const {AppError, addSlashes} = require("../utils");


/** public result */
const getPaymentsList = async () => {
    const payments = await Payment.find({
        enabled: true
    })
    .select("-__v")
    .sort({ name: -1 })
    .limit(10);
  
    return payments;
  };

const getPayment = async (id) => {
  const payment = await Payment.findById(id);
  return payment;
}

const getPayments = async (query) => {
  let pageNumber = query.page ? parseInt(query.page) : 1;
  let pageSize = 25; // number records per a page
  const count = await Payment.countDocuments();
  const payments = await Payment.find()
    .select("-__v")
    .sort({ name: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = payments.length;
  const totalPages = Math.ceil(count / pageSize);
  return 
    {
      pageSize,
      pageNumber,
      count,
      totalPages,
      filteredCount,
      payments
    }
  ;
}

const getPaymentList = async () => {
  const payments = await Payment.find()
    .select("_id code name desc")
    .sort({ name: -1 })
  return payments;
}

const createPayment = async (body) => {
  const payment = await Payment.create(body);
  return payment;
}

const updatePayment = async (id, body) => {
  const payment = await getPayment(id);
  if (!payment) {
    throw new AppError("Payment not Found", 400);
  }

  body.config = addSlashes(body.config);

  Object.assign(payment, body);
  let result = await payment.save();
  return result;
}

const deletePayment = async (id) => {
  const payment = await getPayment(id);
  if (!payment) {
    throw new AppError("Payment not Found", 400);
  }
  let result = await payment.remove({ _id: payment._id });
  return result;
}

module.exports = {
  getPaymentsList,
  getPayments,
  getPaymentList,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
}
