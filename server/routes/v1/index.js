const express = require("express");
const router = express.Router();

const pagesRoute = require("./pages.route");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const messageRoute = require("./message.route");
const meRoute = require("./me.route");
const customerRoute = require("./customer.route");
const roomRoute = require("./room.route");
const bookingRoute = require("./booking.route");
const paymentRoute = require("./payment.route");
const settingRoute = require("./setting.route");

const routes = [
  {
    path: "/v1",
    route: pagesRoute,
  },
  {
    path: "/v1/users",
    route: userRoute,
  },
  {
    path: "/v1/auth",
    route: authRoute,
  },
  {
    path: "/v1/messages",
    route: messageRoute,
  },
  {
    path: "/v1/me",
    route: meRoute,
  },
  {
    path: "/v1/customers",
    route: customerRoute,
  },
  {
    path: "/v1/rooms",
    route: roomRoute,
  },
  {
    path: "/v1/bookings",
    route: bookingRoute,
  },
  {
    path: "/v1/payments",
    route: paymentRoute,
  },
  {
    path: "/v1/settings",
    route: settingRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
