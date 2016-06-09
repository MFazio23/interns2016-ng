import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";



@Component({
    selector: 'view-user',
    template:
`
<header>
  <title>
    <h1>View User</h1>
  </title>
</header>
  <div class="container-fluid">
      <div class="col-xs-12 col-md-8">
        <img src="#">
        <h2>NamePlace</h2>
      </div>
      <div class="col-xs-6 col-md-4">
        <ul>
          <li>Position: </li>
          <li>School</li>
          <li>Email <small>email for good time!</small></li>
        </ul>
        <a href="index.html">Back</a>
      </div>
  </div>
  
<top-nav></top-nav>
<router-outlet></router-outlet>
<footer></footer>
`
})
export class ViewUserComponent {
    constructor(private router: Router){}
 }