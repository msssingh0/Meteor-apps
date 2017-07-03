Router.configure({
	layoutTemplate: 'layout'
});


Router.map(function(){
	//Home Route
	this.route('questions',{
		path:'/',
		temmplate: 'questions'
	})
});