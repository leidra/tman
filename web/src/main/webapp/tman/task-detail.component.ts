import {Component} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';

@Component({
	selector : 'task-detail',
	template : `
    <div *ngIf="task">
		<h2>{{task.name}} details</h2>
		<div>
			<label>Id: </label>{{task.id}}
		</div>
		<div>
			<label>Name: </label>
			<input placeholder="Name" [(ngModel)]="task.name"/>
		</div>
		<div>
			<label>Description: </label>
			<input placeholder="Description" [(ngModel)]="task.description"/>
		</div>
    </div>
	`,
	inputs : ['task']
})

export class TaskDetail {
	task : Task;
	constructor(private _taskService : TaskService) { }
}