import {Component, OnInit} from 'angular2/core';
import {Task}              from './task';
import {TaskService}       from './task.service';
import {TaskViewComponent} from './task-view.component';
import {Router} from "angular2/router";

@Component({
    selector: 'tasks-list',
    templateUrl:'tman/tasks/task-list.component.html',
    styleUrls:['tman/tasks/task-list.component.css'],
    directives: [TaskViewComponent]
})
export class TaskListComponent implements OnInit {
    tasks:Task[];
    selectedTask:Task;
    deleted = false;

    constructor(private _taskService:TaskService, private _router:Router) {}

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

    delete(id:number) {
        this._taskService.delete(id).subscribe(data => {
            this.deleted = data;
            this.getTasks();
            this.selectedTask = null;
        });
    }

}