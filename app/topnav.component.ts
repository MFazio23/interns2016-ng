import {Component} from "@angular/core";
@Component({
    selector: 'top-nav',
    template: `<div id='top-nav' style="background-color:blue; padding: .2em; float: left; width: 100%">
    <table>
        <tr>
            <td>
                <img class="img-circle" src="images/skyline-logo.jpg" style="width: 4em; height: 4em"/>
            </td>
            <td>
                <p class="silly-text" style="color: white; padding: .5em">The Best Damn Web App Ever Made</p>
            </td>
        </tr>
    </table>
</div>
<nav>
    <a href="/view?userId=:id">View</a>
    <a href="/edit?userId=:id">Edit</a>
    <a href="/create">Create</a>
</nav>
`
})

export class TopNavComponent {

}