var express = require('express');
var router = express.Router();
const articleRepo = require('../repositories/article')
/* GET users listing. */

router.get('/', async function(req, res, next) { 
  res.send(  await articleRepo.getAllArticles() );
});

router.get('/', async function(req, res, next) { 
  res.send(  await articleRepo.getArticles(req.query.off,req.query.lim) );
});
router.get('/:id', async function(req, res, next) { 
  res.send(  await articleRepo.getArticle(req.params.id) );
});
router.put('/', async function(req, res, next) { 
  res.send(  await articleRepo.updateArticle(req.body.article) );
});
router.post('/', async function(req, res, next) { 
  res.send(  await articleRepo.addArticle(req.body.article) );
});
router.delete('/:id', async function(req, res, next) { 
  res.send(  await articleRepo.deleteArticle(req.params.id) );
});

module.exports = router;
