var express = require('express');
var router = express.Router();
const tagRepo = require('../repositories/tag')
/* GET users listing. */

router.get('/', async function(req, res, next) { 
  res.send(  await tagRepo.getAllTags() );
});

router.get('/', async function(req, res, next) { 
  res.send(  await tagRepo.getTags(req.query.off,req.query.lim) );
});
router.get('/:id', async function(req, res, next) { 
  res.send(  await tagRepo.getTag(req.params.id) );
});
router.put('/', async function(req, res, next) { 
  res.send(  await tagRepo.updateTag(req.body.tag) );
});
router.post('/', async function(req, res, next) { 
  res.send(  await tagRepo.addTag(req.body.tag) );
});
router.delete('/:id', async function(req, res, next) { 
  res.send(  await tagRepo.deleteTag(req.params.id) );
});

module.exports = router;
