import {Component, OnInit} from "@angular/core";
import {DBService} from "./db-service";
import {Person} from "./person";

@Component({
    selector: '<list-users>',
    directives: [],
    providers: [DBService],
    template:
`<h1>List Users</h1>

<table class="table table-striped">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Title</th>
        <th>School</th>
    </tr>
    <tr *ngFor="let person of people">
        <td>{{person.name}}</td>
        <td><a href="mailto:{{person.email}}">{{person.email}}</a></td>
        <td>{{person.title}}</td>
        <td>{{person.school}}</td>
    </tr>
</table>
`
})
export class ListUsersComponent implements OnInit{

    people: Person[];
    errorMessage:string;
    mode:string = 'Observable';

    getPeople():void {
        this.dbService.getPeople()
            .subscribe(
                people => this.people = people,
                error => this.errorMessage = <any>error
            );
    }

    ngOnInit():void {
        this.getPeople();
    }

    constructor(private dbService:DBService) {
    }
}