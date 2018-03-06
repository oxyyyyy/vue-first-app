new Vue ({
	el: '#app',
	data: {
		title: 'Default text',
		bgColor: ''
	},
	methods: {
		changeText () {
			this.title = 'Changed text!'
		}
	}
});