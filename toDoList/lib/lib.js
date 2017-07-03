Todos =new Mongo.Collection('todos');

Meteor.methods({
	addToDo: function(text){
		if(! Meteor.userId()){
			throw new Meteor.Error('No authorized user');
		}
		Todos.insert({
			text: text,
			createdAt: new Date(),
			userId: Meteor.userId(),
			username: Meteor.user().username
		});
	},
	deleteToDo: function(todoId){
		var todo=Todos.findOne(todoId);
		if(todo.userId !== Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Todos.remove(todoId);
	},
	setToDo: function(todoId,setChecked){
		var todo=Todos.findOne(todoId);
		if(todo.userId !== Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Todos.update(todoId,{$set:{checked: setChecked}});
	}
});