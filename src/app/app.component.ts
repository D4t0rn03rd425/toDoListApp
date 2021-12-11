import { TodoService } from './todo.service'
import { Component } from '@angular/core';

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

	myTodo = { name: "Wash clothes", done: false, id: 3 }

	constructor(todoService: TodoService) {
		console.log(todoService.getAll());
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
}
