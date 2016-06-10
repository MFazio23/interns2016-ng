import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Person} from "./person";
import {Observable} from "rxjs/rx";

@Injectable()
export class DBService {
    DB_URL:string = 'https://faziotest.firebaseio.com/interns2016/users';

    constructor(private http:Http) {

    }

    getPeople():Observable<Person[]> {
        return this.http.get(this.DB_URL + '.json')
            .map(DBService.extractData)
            .catch(this.handleError);
    }

    getPerson(id:string):Observable<Person> {
        return this.http.get(this.DB_URL + id + '.json')
            .map(DBService.extractData)
            .catch(this.handleError);
    }

    addPerson(person:Person): Observable<Person> {
        let body = JSON.stringify(person);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        console.log("Body", body);

        return this.http.post(this.DB_URL + '.json', body, options)
            .map(DBService.extractData)
            .catch(this.handleError);
    }

    deletePerson(id:string): Observable<Person> {
        return this.http.delete(this.DB_URL + '/' + id + ".json")
            .map(DBService.extractData)
            .catch(this.handleError);
    }

    private static extractData(res:Response) {
        console.log("Res", res);
        let data = res.json();

        console.log("Data", data, data instanceof Object);

        return data instanceof Array ? data : DBService.convertToArray(data);
    }

    private static convertToArray(o:Object):any[] {
        let data:any[] = [];

        for (let id in o) {
            if (o.hasOwnProperty(id) ) {
                let person: Person = o[id];
                person.id = id;
                data.push(person);
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
