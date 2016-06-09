import {Component} from '@angular/core';
import {EditUserComponent} from './edituser.component';
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {CreateUserComponent} from './createuser.component';
import {ViewUserComponent} from './viewuser.component';
import {ListUsersComponent} from './listusers.component';
//import { bootstrap } from '@angular/platform-browser-dynamic';

@Routes([
    {path: '/', component: ListUsersComponent},
    {path: '/edit', component: EditUserComponent},
   {path: '/create', component: CreateUserComponent},
  {path: '/view', component: ViewUserComponent}
])

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:
`
<nav>
	<a href="/view">View</a>
	<a href="/edit">Edit</a>
	<a href="/create">Create</a>
</nav>
<top-nav>
</top-nav>
<router-outlet></router-outlet>
<footer></footer>
`
})
export class AppComponent { 
	constructor(private router: Router){
		
	}
}
