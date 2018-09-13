var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const contactController = require('../controllers').contact;
router.get('/api/contact', contactController.list);
router.get('/api/contact/:id', contactController.getById);
router.post('/api/contact', contactController.add);
router.put('/api/contact/:id', contactController.update);
router.delete('/api/contact/:id', contactController.delete);