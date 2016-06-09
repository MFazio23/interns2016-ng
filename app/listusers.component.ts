import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
	selector: 'ListUsersComponent',
	directives: [ROUTER_DIRECTIVES],
	template:
		`
			<h1>List Users</h2>
		`
})
export class ListUsersComponent {
}