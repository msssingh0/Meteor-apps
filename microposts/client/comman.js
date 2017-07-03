Meteor.subscribe("Posts");

Meteor.subscribe("ProfileImages");

Meteor.subscribe("UserImages");

Template.registerHelper('getProfileImg',function(userId){
	console.loh('Hey')
	var imgUrl = UserImages.findOne({userId: userId}).image;
	console.log('hi');
	console.log(imgUrl);
	return imgUrl;
});