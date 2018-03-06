Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

new Vue({
	el: '#app',
	data: {
		addItemInputText: '',
		id: 0,
		todoList: []
	},
	methods: {
		addItemToList() {
			this.todoList.push({
				id: this.id++,
				text: this.addItemInputText
			});
			this.addItemInputText = ''
		}
	}
});