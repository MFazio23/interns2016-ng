import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Person} from "./person";
import {Observable} from "rxjs/rx";

@Injectable()
export class DBService {
    DB_URL:string = 'https://faziotest.firebaseio.com/interns2016/users';

    constructor(private http:Http) {

    }

    getPeople():Observable<Person[]> {
        return this.http.get(this.DB_URL + '.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPerson(id:string):Observable<Person> {

        return this.http.get(this.DB_URL + `/${id}.json`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let data = res.json();

        return data instanceof Array ? data : DBService.convertToArray(data);
    }

    private static convertToArray(o: Object): any[] {
        let data: any[] = [];

        for (let id in o) {
            if (o.hasOwnProperty(id)) {
                data.push(o[id]);
            }
        }

        return data;
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
