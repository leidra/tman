import {Component} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
	selector : 'task-detail',
	templateUrl : 'tman/tasks/task-detail.component.html',
	styleUrls:['tman/tasks/task-detail.component.css'],
	inputs : ['task']
})
export class TaskDetailComponent implements OnInit{
	task : Task;
	constructor(private _taskService : TaskService, private _routeParams:RouteParams) { }

	ngOnInit() {
		if(this._routeParams.get('id') != null) {
			let id = +this._routeParams.get('id');
			this._taskService.findOne(id).subscribe(task => this.task = task);
		}
	}

	goBack() {
		window.history.back();
	}
}