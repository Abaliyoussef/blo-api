const { Comment } = require('../models')
 module.exports = {
   getAllComment() {  
    return Comment.findAll();
   },
   // méthodes à implémenter
   getComments(offset = 0, limit = 10) {
     return Comment.findAll({offset:parseInt(offset),limit:parseInt(limit)});
    },
  
   getComment(id) {
    return Comment.findOne({ where:{ id:id } });
    },
   addComment(comment) { 
     return Comment.create({
       content: comment.content,
       ArticleId: comment.ArticleId
       
     })
   },
   updateComment(comment) {
     const cmt=ArticleId.findByPk(comment.id);
     return cmt.update({where : {id:comment.id}});
    },
   deleteComment(id) { 
     return Comment.destroy({where:{id:id}});
   },
   // D'autres méthodes jugées utiles
 }

