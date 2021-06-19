const { Article } = require('../models')

module.exports = {
    getAllArticles() {
        return Article.findAll();
    },

    getArticles(offset = 0, limit = 10) {
        return Article.findAll({offset:parseInt(offset),limit:parseInt(limit)});
       },
      
      getArticle(id) {
       return Article.findOne({ where:{ id:id } });
       },
      addArticle(article) { 
        return Article.create({
          title: article.title,
          content: article.content,
          published:article.published,
          
        })
      },
      updateArticle(article) {
        const Obj=Article.findByPk(article.id);
        return Obj.update({where : {id:article.id}});
       },
      deleteArticle(id) { 
        return Article.destroy({where:{id:id}});
      },
      // D'autres m
}
