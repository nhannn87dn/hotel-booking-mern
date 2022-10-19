const {customerService} = require("../services");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const requestHandler = require("../utils/requestHandler");


const getCustomer = catchAsync(async (req, res)=> {
    const {id} = req.params;
    const customer = await customerService.getCustomer(id);
    if(!customer) throw new AppError('Customer not found',400);
    requestHandler.sendSuccess(res,'successful')({customer});
});

const getCustomers = catchAsync(async (req, res)=> {
    let pageNumber = req.query.page ? parseInt(req.query.page) : 1;
    const customers = await customerService.getCustomers(pageNumber);
    requestHandler.sendSuccess(res,'successful')(customers);
});

const createCustomer = catchAsync(async (req, res)=> {
    const customer = await customerService.createCustomer(req.body);
    requestHandler.sendSuccess(res,'successful')({customer});
});

const updateCustomer = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const customer = await customerService.updateCustomer(id,req.body);
    requestHandler.sendSuccess(res,'successful')({customer});
});

const deleteCustomer = catchAsync(async (req, res)=> {
    const id = req.params.id;
    const customer = await customerService.deleteCustomer(id);
    requestHandler.sendSuccess(res,'successful')({customer});
});


module.exports = {
    getCustomer,
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer

}