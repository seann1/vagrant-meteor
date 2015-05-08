Dogs = new Meteor.Collection('dogs', {
	transform: function(dogs) {
		return dogs;
	}
})