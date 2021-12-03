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

	public onClick(event: MouseEvent): void {
		alert(`screen position: ${event.screenX},${event.screenY}`);
	}

	public onMouseMove(event: MouseEvent): void {
		console.log(`client position: ${event.clientX},${event.clientY}`);
	}
}
