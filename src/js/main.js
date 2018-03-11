Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

new Vue({
	el: '#app',
	data: {
		addItemInputText: '',
		id: 0,
		todoList: [],
		isChecked: false
	},
	methods: {
		addItemToList() {
			this.todoList.unshift({
				id: this.id++,
				text: this.addItemInputText,
				isChecked: this.isChecked
			});
			this.addItemInputText = ''
		},
		checkTodoItem(item) {
			// Даём класс .checked
			item.isChecked = !item.isChecked;
			// Перемещаем в конец списка
			this.todoList = this.todoList.filter(i => i.id !== item.id);
			this.todoList.push(item);
		}
	}
});