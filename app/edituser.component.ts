import {Component} from '@angular/core';
import {Person} from './Person';


@Component({
    selector: 'edit-user',
    template:
`
<h1>Edit
<form>
  <div class="form-group">
    <label for="Namefield">Name: </label>
    <input type="text" class="form-control" id="Namefield" [(ngModel)]= "person.name" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="title">Title: </label>
    <input type="text" class="form-control" id="title" [(ngModel)]= "person.title" placeholder="Position">
  </div>
    <div class="form-group">
    <label for="school">School: </label>
    <input type="text" class="form-control" id="school" [(ngModel)]= "person.school" placeholder="School">
  </div>
    <div class="form-group">
    <label for="Email">Email: </label>
    <input type="email" class="form-control" id="Email" [(ngModel)]= "person.email" placeholder="Email">
    </div>
  <button type="submit" class="btn btn-default" (click)="SubmittoDatabase()">Submit</button>
</form>

`
})
export class EditUserComponent { 
person: Person=new Person("name","title","the place","email.email.com");
SubmittoDatabase(): void{
    console.log(this.person);

}

}