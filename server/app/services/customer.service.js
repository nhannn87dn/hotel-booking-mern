const {Customer} = require('../models');
const AppError = require('../utils/AppError');



const getCustomer = async (id)=> {
    const customer = await Customer.findById(id);
    return customer;
};

const getCustomers = async (pageNumber)=> {

    let pageSize = 25; // number records per a page
    const totals = await Customer.countDocuments();

    const customers = await Customer.find()
      .select('-__v')
      .sort({name:-1})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
   
    const filteredCount = customers.length;

    return [{ pageSize, totals, filteredCount, customers }];
};


const createCustomer = async (customerBody)=> {
    const customer = await Customer.create(customerBody);
    return customer;
};

const updateCustomer = async (id,customerBody)=> {
    const customer = await getCustomer(id);
    if(!customer){
        throw new AppError('Customer not Found', 400);
    }

    if(customerBody.email && (await Customer.isEmailTaken(customerBody.email, id))){
        throw new AppError('Email is already taken', 400);
    }
    Object.assign(customer,customerBody); 
    let result = await customer.save();
    return result;
}

//TODO delete bookings by customer Id
const deleteCustomer = async(id) =>{
    const customer = await getCustomer(id);
    if(!customer){
        throw new AppError('Customer not Found', 400);
    }
    let result = await customer.remove({_id: customer._id});
    return result;
}


module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
