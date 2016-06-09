import {Component} from '@angular/core';
import {Person} from './person';

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
        <span>Email: </span><input id="email" type="textbox" [(ngModel)]="person.email"/>
        <br /><br />
        <span>Image Url: </span><input id="imageUrl" type="textbox" (blur)="onImageUrlBlur()" [(ngModel)]="person.imageUrl"/>
        <br /><br />
        <input id="submit" type="submit" value="Create Person" (click)="submitToDatabase()"/>
    </form>
</div>

`
})
export class CreateUserComponent {

    imageUrl: string;

    person: Person= new Person("", "", "", "", "");

    onImageUrlBlur(): void {
        this.imageUrl = this.person.imageUrl;
    }

    submitToDatabase(): void {
        console.log("Person Info:\nName: " + this.person.name + "\nTitle: " + this.person.title + "\nSchool: " + this.person.school + "\nEmail: " + this.person.email + "\nImage Url: " + this.person.imageUrl);
    }


 }