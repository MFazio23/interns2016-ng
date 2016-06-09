import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
//import { bootstrap } from '@angular/platform-browser-dynamic';
//bootstrap(AppComponent);


@Component({
	selector: 'ListUsersComponent',
	directives: [ROUTER_DIRECTIVES],
	template:
	
		`
			<h1>List Users</h1>
			<table class="table table-striped">
			<tr>
				<th style = "width: 30%">Name</th>
				<th style = "width: 30%">Email</th>
				<th style = "width: 20%">School</th>
				<th style = "width: 10%">Title</th>
				<td style = "width: 5%"></td>
				<td style = "width: 5%"></td>
			</tr>
			<tr>
					<td>user.name</td>
					<td>user.email</td>
					<td>user.school</td>
					<td>user.title</td>
					<td><button>Edit</button></td>
					<td><button>Delete</button></td>
				</tr>
				<tr>
					<td>user.name</td>
					<td>user.email</td>
					<td>user.school</td>
					<td>user.title</td>
					<td><button>Edit</button></td>
					<td><button>Delete</button></td>
				</tr>
				<tr>
					<td>user.name</td>
					<td>user.email</td>
					<td>user.school</td>
					<td>user.title</td>
					<td><button>Edit</button></td>
					<td><button>Delete</button></td>
				</tr>
			<!-- for(var user in people){
				<tr>
					<td>user.name</td>
					<td>user.email</td>
					<td>user.school</td>
					<td>user.title</td>
					<td><button>Edit</button></td>
					<td><button>Delete</button></td>
				</tr>
			} -->
			</table>
			<button>Create person</button>
		`
})
export class ListUsersComponent {
}