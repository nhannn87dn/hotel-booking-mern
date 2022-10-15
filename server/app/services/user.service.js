const { User } = require("../models");
const AppError = require("../utils/AppError");
const _ = require("lodash");

const getUser = async (id) => {
  const user = await User.findById(id);
  var result = _.pick(user, ["name", "email", "role", "isEmailVerified"]);
  return result;
};

const getUsers = async (pageNumber) => {
  const pageSize = 25; // number records per a page
  const count = await User.countDocuments();

  const users = await User.find()
    .select("-password -__v")
    .sort({ name: -1 })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const filteredCount = users.length;

  return [
    {
      pageSize,
      pageNumber,
      count,
      totalPages: Math.ceil(count / pageSize),
      filteredCount,
      users,
    },
  ];
};

const checkUserEmail = async (userBody) => {
  const email = await User.findOne({
    email: userBody.email,
  });
  return email;
};

const createUser = async (userBody) => {
  const user = await User.create(userBody);
  var result = _.pick(user, ["name", "email", "role", "isEmailVerified"]);
  return result;
};

const updateUser = async (id, userBody) => {
  const user = await getUser(id);
  if (!user) {
    throw new AppError("User not Found", 400);
  }

  if (userBody.email && (await User.isEmailTaken(userBody.email, id))) {
    throw new AppError("Email is already taken", 400);
  }
  Object.assign(user, userBody); //overwrite, with password hash
  await user.save();
  var result = _.pick(user, ["name", "email", "role", "isEmailVerified"]);
  return result;
};

//TODO delete messages replied by User Id
const deleteUser = async (id) => {
  const user = await getUser(id);
  if (!user) {
    throw new AppError("User not Found", 400);
  }
  await user.remove({ _id: ObjectId(user._id) });
  var result = _.pick(user, ["name", "email", "role", "isEmailVerified"]);
  return result;
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkUserEmail,
};
