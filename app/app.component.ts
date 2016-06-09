import {Component} from '@angular/core';
import {EditUserComponent} from './edituser.component';
import {Router, Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {CreateUserComponent} from './createuser.component';
import {ViewUserComponent} from './viewuser.component';
import {ViewAllComponent} from './viewall.component';
//import {ListUsersComponent} from './listuser.component';

@Routes([
    //{path: '/', component: ListUsersComponent},
    {path: '/edit?userId=:id', component: EditUserComponent},
   {path: '/create', component: CreateUserComponent},
  {path: '/viewUser', component: ViewUserComponent},
  {path: '/viewAll', component: ViewAllComponent, useAsDefault: true }
])

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:
`

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Start Bootstrap</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/viewAll">ViewAll</a>
                    </li>
                    <li>
                        <a href="/edit?userId=:id">Edit</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    
    <router-outlet></router-outlet>
    

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </footer>

    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
`
})
export class AppComponent {
    constructor(private router: Router){}
 }
