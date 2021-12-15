import { TodoService } from './todo.service'
import { Component } from '@angular/core';
import { Todo } from './todo';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'toDoListApp';

	public value = 'Hello!';

	color = 'goldenrod';

	numericValue = 5;

	show = true;

	myTodo = { name: "Wash clothes", done: false, id: 3 }

	todos: Todo[] = [];

	constructor(private todoService: TodoService, private authService: AuthService) {

	}

	public onClick(event: MouseEvent): void {
		alert(`screen position: ${event.screenX},${event.screenY}`);
	}

	public onMouseMove(event: MouseEvent): void {
		console.log(`client position: ${event.clientX},${event.clientY}`);
	}

	onDone(event: any) {
		console.log(event);
	}

	login() {
		this.authService.loginWithRedirect();
	}

	requestTodos() {
		this.todoService.getAll()
			.subscribe(todos => this.todos = todos);
	}

	addTodo(name: string) {
		this.todoService.create({ name, done: false }).subscribe(() => this.requestTodos());
	}
}
