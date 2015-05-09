Dogs = new Meteor.Collection('dogs', {
	transform: function(dogs) {
		return dogs;
	}
});

Dogs.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 20,
		optional: false
	},
	birthday: {
		type: Date,
		label: "Birthday",
		optional: true
	}
}));