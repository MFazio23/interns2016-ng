import {Component} from "@angular/core";
import {EditUserComponent} from "./edituser.component";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {CreateUserComponent} from "./createuser.component";
import {ListUsersComponent} from "./listusers.component";
import {TopNavComponent} from "./topnav.component";
//import {ViewUserComponent} from './ViewUserComponent';

@Routes([
    {path: '/', component: ListUsersComponent},
    {path: '/edit/:id', component: EditUserComponent},
    {path: '/create', component: CreateUserComponent},
    //{path: '/view?userId=:id', component: ViewUserComponent}
])

@Component({
    selector: 'my-app',
    directives: [TopNavComponent, ROUTER_DIRECTIVES],
    template: `

<top-nav>
</top-nav>
<div class="container-fluid">
    <router-outlet></router-outlet>
</div>
<footer></footer>
`
})
export class AppComponent {
    constructor(private router:Router) {

    }
}
