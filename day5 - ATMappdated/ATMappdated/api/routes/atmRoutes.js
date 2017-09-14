module.exports = function(app) {
  var ATMapp = require('../controllers/atmController');

  app.route('/')
    .get(function (req, res) {
      res.render('index', { title: 'Banking App' })
    });

  app.route('/newaccount')
    .post(ATMapp.createNewAccount);

  app.route('/:_id')
    .get(ATMapp.showOneAccount)
    .post(ATMapp.updateOneAccount)
    .delete(ATMapp.deleteOneAccount);

  app.route('/api')
    .get(ATMapp.showAllAccounts);

};
