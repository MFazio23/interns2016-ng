import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";


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