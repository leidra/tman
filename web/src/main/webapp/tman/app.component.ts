import {Component} from 'angular2/core'
import {TaskService} from './task.service'
import {TaskListComponent} from './tasks-list.component'
import {HTTP_PROVIDERS}    	from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from "./dashboard.component";
import {TaskDetailComponent} from "./task-detail.component";

@RouteConfig([
	{
		path: '/tasks',
		name: 'TasksList',
		component: TaskListComponent
	},
	{
		path: '/task/:id',
		name: 'TaskDetail',
		component: TaskDetailComponent
	},
	{
		path: '/',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
])
@Component({
	selector:'tman',
	template: `
	<h1>{{title}}</h1>
	<nav>
		<a [routerLink]="['Dashboard']">Dashboard</a>
		<a [routerLink]="['TasksList']">Tasks</a>
	</nav>
  	<router-outlet></router-outlet>
  	`,
	directives: [ROUTER_DIRECTIVES],
	providers:[TaskService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class ApplicationComponent {
	title = "Task Manager application"

	goBack() {
		window.history.back();
	}
}