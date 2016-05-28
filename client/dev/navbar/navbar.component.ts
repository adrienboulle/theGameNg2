import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
	selector: 'nav-bar',
	templateUrl: '/client/dev/navbar/navbar.html',
	directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {

	constructor(public router: Router) {}
}