import {Component} from '@angular/core';
import {EditUserComponent} from './edituser.component';
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {CreateUserComponent} from './createuser.component';
//import {ViewUserComponent} from './ViewUserComponent';
import {ListUsersComponent} from './listusers.component';

@Routes([
    {path: '/', component: ListUsersComponent},
    {path: '/edit?userId=:id', component: EditUserComponent},
    {path: '/create', component: CreateUserComponent},
  //{path: '/view?userId=:id', component: ViewUserComponent}
])

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:
`
<nav>
	<a href="/view?userId=:id">View</a>
	<a href="/edit?userId=:id">Edit</a>
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
