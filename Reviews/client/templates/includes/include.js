Template.sidebar.helpers({
	categories: function(){
		//console.log('Hello');
		return Categories.find({},{
			sort: {
				name: 1
			}
		});
	}
});