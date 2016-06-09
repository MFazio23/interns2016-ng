import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'View ',
    directives: [ROUTER_DIRECTIVES],
    template:
`
<top-nav></top-nav>
<router-outlet></router-outlet>
<footer></footer>
`
})
export class ViewUserComponent { }