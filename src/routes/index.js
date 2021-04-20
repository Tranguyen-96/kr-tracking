const express = require('express');
const app = express();
const trackingRoute = require("./tracking.route");

app.use('/tracking', trackingRoute);

module.exports = app;