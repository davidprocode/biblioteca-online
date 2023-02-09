var express = require('express');
var router = express.Router();

/* GET Adicionar novo livro. */
router.get('/novo', function (req, res, next) {
  res.render('library/new-book', { title: 'Adicionar novo livro' });
});

/* GET Listar livros. */
router.get('/listar', function (req, res, next) {
  res.render('library/all', { title: 'Listar livros' });
});

module.exports = router;
