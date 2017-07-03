import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('todos',function(){
  	if(!this.userId){

  	}else{
  	return Todos.find({userId: this.userId});
  	}
  });
});
