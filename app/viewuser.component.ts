import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";



@Component({
    selector: 'view-user',
    template:
`
<top-nav></top-nav>
<router-outlet></router-outlet>
<footer></footer>
`
})
export class ViewUserComponent {
    constructor(private router: Router){}
 }