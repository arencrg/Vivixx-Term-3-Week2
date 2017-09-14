const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/guitarlistapp', {
  keepAlive: true,
  reconnectTries: 120000,
  useMongoClient: true
});

// create a schema
const guitarSchema = new Schema({
  gbrand: String,
  gmodel: String,
  created_at: { type: Date, default: Date.now },
});

// the schema is useless so far, we need to create a model using it
const Guitar = mongoose.model('Guitar', guitarSchema);
// make this available to our users in our Node applications
module.exports = Guitar;
