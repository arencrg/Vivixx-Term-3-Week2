var express = require('express');
var router = express.Router();

const Guitar = require('../models/guitarmodel');

router.get('/', (req, res) => {
  Guitar.find()
  .then(guitar => {

    res.render('index', {
      title: "The Result of Significant Other's GAS",
      list: guitar,
      sorted: false
    });

  });
});

router.get('/sortbymodel', (req, res) => {
  Guitar.find()
  .then(guitar => {

    res.render('index', {
      title: "The Result of Significant Other's GAS",
      list: guitar,
      sorted: true
    });

  });
});

router.post('/', (req, res) => {
  const gbrand = req.body.guitar_gbrand;
  const gmodel = req.body.guitar_gmodel;
  let newguitar = new Guitar();
  newguitar.gbrand = gbrand;
  newguitar.gmodel = gmodel;
  newguitar.save()
  .then(() => {
    res.redirect('/')
  });
});

router.get('/delete/:id', (req, res) => {
	var id = req.params.id;
 Guitar.findById(id, function(err, guitar) {
  if (err) throw err;
  gbrand = guitar.gbrand;
  gmodel = guitar.gmodel;
    res.render('delete', {
      title: 'Deleting Guitar',
      guitar_id: id,
      guitar_gbrand: gbrand,
      guitar_gmodel: gmodel
    });
	});
});

router.post('/delete', (req, res) => {
  Guitar.findByIdAndRemove(req.body.guitar_id, function(err) {
  if (err) throw err;
  console.log('Guitar deleted!');
  });
  res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
	var id = req.params.id;
 Guitar.findById(id, function(err, guitar) {
  if (err) throw err;
  gbrand = guitar.gbrand;
  gmodel = guitar.gmodel;
    res.render('edit', {
      title: 'Editing Guitar',
      guitar_id: id,
      guitar_gbrand: gbrand,
      guitar_gmodel: gmodel
    });
	});
});

router.post('/edit', (req, res) => {
  Guitar.findById(req.body.guitar_id, function(err, guitar) {
  if (err) throw err;
  guitar.gbrand = req.body.guitar_gbrand;
  guitar.gmodel = req.body.guitar_gmodel;
  guitar.save(function(err) {
    if (err) throw err;
    console.log('User successfully updated!');
  });
  });
  res.redirect('/');
});

module.exports = router;
