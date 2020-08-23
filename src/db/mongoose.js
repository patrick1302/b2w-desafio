const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB || 'mongodb://localhost/b2w', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
