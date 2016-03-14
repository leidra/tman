import {Component, OnInit} 	from 'angular2/core';
import {Task} 				from './task';
import {TaskService} 		from './task.service';
import {TaskDetail} 		from './task-detail.component';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'tman',
    template: `
    <h1>Task list</h1>
    <ul>
    	<li *ngFor="#task of tasks"
			[class.selected]="task === selectedTask"
			(click)="onSelect(task)">
			<span>{{task.id}}</span>{{task.name}}
			<p>{{task.description}}</p>
		</li>
    </ul>
    <task-detail [task]="selectedTask"></task-detail>
    `,
    directives: [TaskDetail],
	providers: [HTTP_PROVIDERS, TaskService]
})

export class TManComponent implements OnInit{
	tasks 			: Task[];
	selectedTask	: Task;

	constructor(private _taskService :TaskService) {}

	getTasks() {
		this._taskService.getTasks().subscribe(
				tasks => this.tasks = tasks
				/*,
				error => this.errorMessage = <any>error
				*/
		);
	}

	ngOnInit() {
		this.getTasks();
	}

	onSelect(task: Task) {
		this.selectedTask = task;
	}

};