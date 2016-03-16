import {Component}        from 'angular2/core';
import {Task}            from './task';
import {TaskService}    from './task.service';
import {OnInit} from "angular2/core";

@Component({
    selector: 'dashboard',
    template: ''
})
export class DashboardComponent implements OnInit {
    tasks:Task[];

    constructor(private _taskService:TaskService) {
    }

    ngOnInit() {
        this._taskService.getTasks().subscribe(tasks => this.tasks = tasks.slice(1, 5));
    }

}