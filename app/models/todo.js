// MODEL TODO

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

/*var Todo = db.define('Todo', {
description: Sequelize.STRING
});*/


var todo = db.define('todo', {
	pseudo: Sequelize.STRING,
	ville: Sequelize.STRING,
	email:Sequelize.STRING,
	mdp: Sequelize.STRING

});

//Todo.sync().then(function(){});
todo.sync().then(function(){});


module.exports.create = function(req, res) {
	todo.create({
		pseudo: req.body.nickname,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.password
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	todo.findAll().then(function (data) {
		res.json(data);
	});
};

module.exports.update = function(req, res){
	todo.update({
		pseudo: req.body.pseudo,
		ville: req.body.ville,
		email: req.body.email,
		mdp: req.body.mdp
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	todo.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
