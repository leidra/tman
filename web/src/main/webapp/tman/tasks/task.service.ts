import {RequestOptions,Headers, Http, Response} from 'angular2/http';
import {Task}            from './task';
import {Injectable}    from 'angular2/core';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TaskService {
    private _resourceUrl = 'http://localhost:8081/resources/tasks/';  // URL to web api

    constructor(private http:Http) {
    }

    findAll():Promise<Task[]> {
        return this.http.get(this._resourceUrl)
            .toPromise()
            .then(res => <Task[]> res.json(), this.handleError)
            .then(data => {
                console.log(data);
                return data;
            });
    }

    findOne(id:number):Observable<Task> {
        return this.http.get(this._resourceUrl + id)
            .map(res => <Task> res.json())
            .catch(this.handleError);
    }

    delete(id:number) : Observable<boolean> {
        return this.http.delete(this._resourceUrl + id).map((res:Response) => res.json());
    }

    save(task:Task):Promise<Task> {
        if (task != null) {
            let body = JSON.stringify(task);
            let headers = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({headers: headers});

            return this.http.post(this._resourceUrl, body, options)
                .toPromise()
                .then(res => <Task> res.json())
                .then(data => {
                    return data
                })
                .catch(this.handleError)
        }
    }

    private handleError(error:Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}