import {Task} 			from './task';
import {Injectable} 	from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TaskService {
	private _resourceUrl = 'http://localhost:8081/resources';  // URL to web api

	constructor (private http: Http) {}

	getTasks() {
		return this.http.get(this._resourceUrl + '/tasks')
			.map(res => <Task[]> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	getTask(id:number) {
		return this.http.get(this._resourceUrl + '/task/' + id)
			.map(res => <Task> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	private handleError (error: Response) {
		// in a real world app, we may send the error to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
  }
}