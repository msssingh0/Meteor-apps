import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Meteor.subscribe('todos');

// template helpers

Template.main.helpers({
	todos: function(){
		return Todos.find({},{sort:{createdAt: -1}});
	}
});
Template.main.events({
	"submit .new-todo": function(event){
		var text = event.target.text.value;
		Meteor.call('addToDo',text);

//clear form
		event.target.text.value="";

//privent submit
		return false;
	},

	"click .toggle-check": function(){
		Meteor.call('setToDo',this._id,!this.checked);
	},

	"click .delete-todos": function(){
		if(confirm('Are you Sure?')){
			Meteor.call('deleteToDo',this._id);
		}
	}
});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});