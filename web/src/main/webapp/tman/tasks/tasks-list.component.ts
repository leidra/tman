import {Component, OnInit} from 'angular2/core';
import {Task}              from './task';
import {TaskService}       from './task.service';
import {TaskDetailComponent} from './task-detail.component';
import {Router} from "angular2/router";

@Component({
    selector: 'tasks-list',
    templateUrl:'tman/tasks/task-list.component.html',
    styleUrls:['tman/tasks/task-list.component.css'],
    directives: [TaskDetailComponent],
})
export class TaskListComponent implements OnInit {
    tasks:Task[];
    selectedTask:Task;

    constructor(private _taskService:TaskService, private _router:Router) {
    }

    getTasks() {
        // Service return a promise
        this._taskService.findAll().then(tasks => this.tasks = tasks);
    }

    ngOnInit() {
        this.getTasks();
    }

    onSelect(task:Task) {
        this.selectedTask = task;
    }

    gotoDetail() {
        this._router.navigate(['TaskDetail', {id: this.selectedTask.id}]);
    }
}
