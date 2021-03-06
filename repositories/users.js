const { User } = require('../models')
 module.exports = {
   getAllUsers() {  
    return User.findAll();
   },
   // méthodes à implémenter
   getUsers(offset = 0, limit = 10) {
     return User.findAll({offset:parseInt(offset),limit:parseInt(limit)});
    },
   getAdmins() { return User.findAll({where:{role:"admin" }});},
   getAuthors() { return User.findAll({where:{role:"author"}})},
   getGuests(){ return User.findAll({where:{role:"guest"}})},
   getUser(id) {
    return User.findOne({ where:{ id:id } });
    },
   getUserByEmail(email) {return User.findOne({ where:{ email: email } }); },
   addUser(user) { 
     return User.create({
       username: user.username,
       email: user.email,
       password:user.password,
       role:user.role
     })
   },
   updateUser(user) {
     const userObj=User.findByPk(user.id);
     return userObj.update({where : {id:user.id}});
    },
   deleteUser(id) { 
     return User.destroy({where:{id:id}});
   },
   GetUserArticles(id){
    return this.getUser(id).then( user=> user.getArticles() ) ;
},
GetUserComments(id){
    return User.findOne({ where:{ id: id } }).then( user => user.getComments() ) ;
},
   // D'autres méthodes jugées utiles
 }
