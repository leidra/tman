import {Component, OnInit}    from 'angular2/core';
import {Task}                from './task';
import {TaskService}        from './task.service';
import {TaskDetailComponent}        from './task-detail.component';
import {Router} from "angular2/router";

@Component({
    selector: 'tasks-list',
    template: `
    <h2>Task list</h2>
    <ul>
        <li *ngFor="#task of tasks"
            [class.selected]="task === selectedTask"
            (click)="onSelect(task)" class="col-1-4" >
            <span>{{task.id}}</span>{{task.name}}
            <p>{{task.description}}</p>
        </li>
    </ul>
    <task-detail [task]="selectedTask"></task-detail>
    `,
    directives: [TaskDetailComponent],
})
export class TaskListComponent implements OnInit {
    tasks:Task[];
    selectedTask:Task;

    constructor(private _taskService:TaskService, private _router:Router) {
    }

    getTasks() {
        this._taskService.getTasks().subscribe(
            tasks => this.tasks = tasks
        );
    }

    ngOnInit() {
        this.getTasks();
    }

    onSelect(task:Task) {
        this.selectedTask = task;
        this.gotoDetail(task);
    }

    gotoDetail(task:Task) {
        let link = ['TaskDetail', {id: task.id}];
        this._router.navigate(link);
    }
}