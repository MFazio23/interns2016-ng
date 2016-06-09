import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";

import {EditUserComponent} from './edituser.component';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {CreateUserComponent} from './createuser.component';
import {ViewUserComponent} from './viewuser.component';
//import {ListUsersComponent} from './listuser.component';

@Routes([
    //{path: '/', component: ListUsersComponent},
    {path: '/edit?userId=:id', component: EditUserComponent},
   {path: '/create', component: CreateUserComponent},
  {path: '/view', component: ViewUserComponent}
])

@Component({
    selector: 'my-app',
    template:
`
  <h1>hello</h1>
`
})
export class ViewUserComponent {
    constructor(private router: Router){}
 }