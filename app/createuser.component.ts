import {Component} from '@angular/core';
import {Person} from './person';
import {Md5} from "../lib/Md5.js";
import {DBService} from "./db-service";

@Component({
    selector: 'create-user',
    providers: [DBService],
    template:
`

<h1>Create a Person</h1>

<div>
    <form id="createPersonForm">
        <img id="image" src="{{imageUrl}}"/>
        <br /><br />
        <span>Name: </span><input id="name" type="textbox" [(ngModel)]="person.name"/>
        <br /><br />
        <span>Position/Title: </span><input id="title" type="textbox" [(ngModel)]="person.title"/>
        <br /><br />
        <span>School: </span><input id="school" type="textbox" [(ngModel)]="person.school"/>
        <br /><br />
        <span>Email: </span><input id="email" type="textbox" (blur)="onImageUrlBlur()" [(ngModel)]="person.email"/>
        <br /><br />
        <input id="submit" type="submit" value="Create Person" (click)="submitToDatabase()"/>
        <div>{{statusMessage}}</div>
    </form>
</div>

`
})
export class CreateUserComponent {

    imageUrl: string;
    statusMessage: string;

    person: Person = new Person("", "", "", "");

    constructor(private dbService: DBService) { }

    onImageUrlBlur(): void {
        let hash = Md5.hashStr(this.person.email);

        this.imageUrl = `https://www.gravatar.com/avatar/${hash.toString()}.jpg`;
    }

    submitToDatabase(): void {
        this.dbService.addPerson(this.person)
            .subscribe(
                person => this.statusMessage = 'Success!',
                error => this.statusMessage = 'Failure...'
            );
        //console.log("Person Info:\nName: " + this.person.name + "\nTitle: " + this.person.title + "\nSchool: " + this.person.school + "\nEmail: " + this.person.email + "\nImage Url: " + this.person.imageUrl);
    }


 }