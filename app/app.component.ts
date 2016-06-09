import {Component} from '@angular/core';
import {EditUserComponent} from './edituser.component';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {ViewUserComponent}} from './ViewUserComponent';

@Routes([
    //{path: '/', component: ListUsersComponent},
    {path: '/edit?userId=:id', component: EditUserComponent}
   //{path: '/create', component: CreateUserComponent},
  {path: '/view?userId=:id', component: ViewUserComponent}
])

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:
`
<top-nav>hi</top-nav>
<router-outlet></router-outlet>
<footer></footer>
`
})
export class AppComponent { }
