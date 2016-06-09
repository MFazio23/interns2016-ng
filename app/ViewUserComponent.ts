import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'View ',
    directives: [ROUTER_DIRECTIVES],
    template:

<!doctype html>
<html>
	<top-nav>
		<ul>
			<li>
				Hello!
			</li>
			<li>
				Hello!
			</li>
		</ul>
		
	</top-nav>
	<router-outlet></router-outlet>
<footer>Hello</footer>
</html>

})
export class ViewUserComponent { }