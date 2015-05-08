Router.route('dogs', {
	path: '/dogs',
	template: 'dogs',
	data: function () {
		return {
			dogs: Dogs.find()
		}
	}
});