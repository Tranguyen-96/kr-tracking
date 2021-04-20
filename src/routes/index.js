const express = require('express');
const app = express();
const trackingRoute = require("./tracking.route");

app.use('/segment-kr', trackingRoute);

module.exports = app;