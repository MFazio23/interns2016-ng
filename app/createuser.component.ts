import {Component} from '@angular/core';
import {Person} from './person';
import {Md5} from 'ts-md5/dist/md5';

@Component({
    selector: 'create-user',
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
        <span>Email: </span><input id="email" type="textbox" (blur)="onEmailBlur()" [(ngModel)]="person.email"/>
        <br /><br />
        <input id="submit" type="submit" value="Create Person" (click)="printToConsole()"/>
    </form>
</div>

`
})
export class CreateUserComponent {

    imageUrl: string;

    person: Person= new Person("", "", "", "");

    onEmailBlur(): void {
        let url = Md5.hashStr(this.person.email);
        this.imageUrl = Md5.hashStr(this.person.email).toString();
    }

    printToConsole(): void {
        this.imageUrl = this.person.email;
    }


 }