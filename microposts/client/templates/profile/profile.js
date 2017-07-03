Template.profile.events({
	"submit .edit-profile": function(event){
		var file = $('#profileImage').get(0).files[0];
		console.log(file);
		
		if(file){
			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile,function(err,result){
				if(err){
					throw new Meteor.Error(err);
				}else{

					var imageLOC='/cfs/files/ProfileImage/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user.username,

					});

					router.go('/');
				}
			});
		}
		return false;	
	}
});