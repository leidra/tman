import {Component} from 'angular2/core'
import {TaskService} from './tasks/task.service'
import {TaskListComponent} from './tasks/tasks-list.component'
import {HTTP_PROVIDERS}    	from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TaskViewComponent} from "./tasks/task-view.component";
import {TaskFormComponent} from "./tasks/task-form.component";

@RouteConfig([
	{
		path: '/tasks/list',
		name: 'TasksList',
		component: TaskListComponent
	},
	{
		path: '/tasks/view/:id',
		name: 'TaskDetail',
		component: TaskViewComponent
	},
	{
		path: '/tasks/form/:id',
		name: 'TaskForm',
		component: TaskFormComponent
	},
	{
		path: '/tasks/form',
		name: 'NewTaskForm',
		component: TaskFormComponent
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
	templateUrl: 'tman/app.component.html',
	styleUrls: ['tman/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers:[TaskService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class ApplicationComponent {
	title = "Task Manager application"
}