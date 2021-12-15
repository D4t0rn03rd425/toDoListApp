import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
	declarations: [
		AppComponent,
		YellPipe,
		TodoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,

		// Import the module into the application, with configuration
		AuthModule.forRoot({
			domain: 'dev-3mnjwg73.us.auth0.com',
			clientId: '6c5jJDXv4C3YmJ2J5Dsf8VUUEGeOFZAo',
			audience: 'https://d4t0rn03rd.com/todo',
			httpInterceptor: {
				allowedList: ['http://localhost:3000/*']
			}
		}),
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
