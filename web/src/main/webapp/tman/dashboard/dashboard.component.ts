import {Component}   from 'angular2/core';
import {Task}        from '../tasks/task';
import {TaskService} from '../tasks/task.service';
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'dashboard',
    templateUrl: 'tman/dashboard/dashboard.component.html',
    styleUrls:['tman/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tasks:Task[];

    constructor(private _taskService:TaskService, private _router:Router) {}

    ngOnInit() {
        this._taskService.findAll().then(tasks => this.tasks = tasks.slice(0, 5));
    }

    gotoDetail(task:Task) {
        this._router.navigate(['TaskDetail', {id: task.id}]);
    }

    new() {
        this._router.navigate(['NewTaskForm']);
    }

    delete(id:number) {
        this._taskService.delete(id);
    }

}