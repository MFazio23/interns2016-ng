import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {Person} from './person';
//import { bootstrap } from '@angular/platform-browser-dynamic';
//bootstrap(AppComponent);


@Component({
	selector: 'ListUsersComponent',
	directives: [ROUTER_DIRECTIVES],
	template:
`	
		
			<h1 style = "text-align: center;">List Users</h1>
			<div style = "padding-left: 5%; padding-right: 5%;">
			<table class="table table-striped">
			<thead>
				<th style = "width: 25%">Name</th>
				<th style = "width: 25%">Email</th>
				<th style = "width: 25%">School</th>
				<th style = "width: 15%">Title</th>
				<td style = "width: 5%"></td>
				<td style = "width: 5%"></td>
			</thead>
			<tbody>
				<tr *ngFor ="let person of people">
					<td>{{person.name}}</td>
					<td>{{person.title}}</td>
					<td>{{person.school}}</td>
					<td>{{person.email}}</td>
					<td>
						<button type = "button" style = "background-color: blue;"><a href = "'/create'" class = "btn btn-link" style = "color: white;">Edit</a></button>
					</td>
					<td>			
						<button type = "button" style = "background-color: red;"><a href = "'/create'" class = "btn btn-link" style = "color: white;">Delete</a></button>
					</td>
				</tr>
			</tbody>
			</table>
				<button type = "button" style = "background-color: green;"><a href = "'/create'" class = "btn btn-link" style = "color: white;">Create Person</a></button>
			</div>
			
`		
})
export class ListUsersComponent {
	
	people = [
		new Person("Kyle", "Boss", "Butterburger University", "legend@ry.com"),
		new Person("Timmy", "Boss", "Butterburger University", "legend@ry.com")
	];
	
}