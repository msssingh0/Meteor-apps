Router.configure({
    layoutTemplate: 'layout',
   // notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'navbar'},
       // footer: {to: 'footer'},
    }
});
Router.map(function(){
	//posts Route
	this.route('posts',{
		path:'/',
		template: 'posts'
	});


	//about route
	this.route('about');

	//profile route
	this.route('profile');
});

Router.plugin('ensureSignedIn', {
  only: ['about']
});