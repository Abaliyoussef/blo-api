const { Tag } = require('../models')


module.exports = {
    getAllTags() {
        return Tag.findAll();
    },
    getTags(offset = 0, limit = 10) {
        return Tag.findAll({offset:parseInt(offset),limit:parseInt(limit)});
       },
     
      getTag(id) {
       return Tag.findOne({ where:{ id:id } });
       },
      addTag(tag) { 
        return Tag.create({
          content: tag.content,
          ArticleId: tag.ArticleId
        })
      },
      updateTag(tag) {
        const tg=ArticleId.findByPk(tag.id);
        return tg.update({where : {id:tag.id}});
       },
      deleteTag(id) { 
        return Tag.destroy({where:{id:id}});
      },
}