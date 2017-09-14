var mongoose = require('mongoose');

var clientAccountSchema = mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  password: String,
  accountnum: String,
  balance: Number,
  account_created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ATMaccount', clientAccountSchema);
