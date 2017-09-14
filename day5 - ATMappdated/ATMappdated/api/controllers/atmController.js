var mongoose = require('mongoose'),
  ATMaccount = mongoose.model('ATMaccount');

exports.showAllAccounts = function(req, res) {
  ATMaccount.find({}, function(err, account) {
    if (err)
      res.send(err);
      
    res.json(account);
  });
};

exports.createNewAccount = function(req, res) {
  var new_account = new ATMaccount(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.showOneAccount = function(req, res) {
  ATMaccount.findById(req.params.accountId, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.updateOneAccount = function(req, res) {
  ATMaccount.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.deleteOneAccount = function(req, res) {
  ATMaccount.remove({
    _id: req.params.accountId
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'ATMaccount successfully deleted' });
  });
};
