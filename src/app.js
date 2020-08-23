const express = require('express');
require('./db/mongoose.js');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
  next(error);
});

module.exports = app;
