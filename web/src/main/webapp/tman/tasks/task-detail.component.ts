import {Component,OnInit} from 'angular2/core';
import {RouteParams,Router} from "angular2/router";
import {Task} from './task';
import {TaskService} from './task.service';
import {TaskFormComponent} from "./task-form.component";

@Component({
	selector : 'task-detail',
	templateUrl : 'tman/tasks/task-detail.component.html',
	styleUrls:['tman/tasks/task-detail.component.css'],
	inputs : ['task'],
	directives: [TaskFormComponent]
})
export class TaskDetailComponent implements OnInit{
	task : Task;
	errorMessage : any;

	constructor(private _taskService : TaskService, private _routeParams:RouteParams, private _router:Router) { }

	ngOnInit() {
		if(this._routeParams.get('id') != null) {
			let id = +this._routeParams.get('id');
			console.log("Task " + id + " detail requested")
			this._taskService.findOne(id).subscribe(task => this.task = task,
													error =>  this.errorMessage = <any>error);
		}
	}

	goBack() {
		window.history.back();
	}

	edit() {
		this._router.navigate(['TaskForm', {id: this.task.id}]);
	}

	new() {
		this._router.navigate(['NewTaskForm']);
	}
}