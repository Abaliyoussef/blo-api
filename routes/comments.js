var express = require('express');
var router = express.Router();
const cmtRepo = require('../repositories/comment')
/* GET users listing. */

router.get('/', async function(req, res, next) { 
  res.send(  await cmtRepo.getAllComment() );
});

router.get('/', async function(req, res, next) { 
  res.send(  await cmtRepo.getComments(req.query.off,req.query.lim) );
});
router.get('/:id', async function(req, res, next) { 
  res.send(  await cmtRepo.getComment(req.params.id) );
});
router.put('/', async function(req, res, next) { 
  res.send(  await cmtRepo.updateComment(req.body.comment) );
});
router.post('/', async function(req, res, next) { 
  res.send(  await cmtRepo.addComment(req.body.comment) );
});
router.delete('/:id', async function(req, res, next) { 
  res.send(  await cmtRepo.deleteComment(req.params.id) );
});

module.exports = router;
