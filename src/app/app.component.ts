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

	public onClick(): void {
		alert('Hello');
	}

	public onMouseMove(): void {
		console.log('Mouse moved!');
	}
}
