const express = require('express');
const { STATIC_PATH } = require('./constants');
const { errorHandlers } = require('./middleware');
const router = require('./router');

const app = express();

app.use(express.static(STATIC_PATH));

app.use(express.json());

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
