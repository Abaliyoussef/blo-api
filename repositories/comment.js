const { Comment } = require('../models')
 module.exports = {
   getAllComment() {  
    return Comment.findAll();
   },
  
   // D'autres méthodes jugées utiles
 }
