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
  <div class="container">
    <div class="wrapper">
      <div class="faceAndName">
        <img src="#">
        <h2>NamePlace</h2>
      </div>
      <div class="info">
        <ul>
          <li>Position: </li>
          <li>School</li>
          <li>Email <small>email for good time!</small></li>
        </ul>
      </div>
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