var express = require('express');
var router = express.Router();

/* GET novo-livro. */
router.get('/pesquisar', function (req, res, next) {
  res.render('library/search', { title: 'Pesquisar livro' });
});

module.exports = router;
