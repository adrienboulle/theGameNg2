import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs/Subscription";
import {HasRoleDirective} from "../shared/auth/has-role.directive";
import {HasAnyRoleDirective} from "../shared/auth/has-any-role.directive";
import {IsAuthDirective} from "../shared/auth/is-auth.directive";

@Component({
	selector: 'nav-bar',
	templateUrl: '/client/dev/navbar/navbar.html',
	directives: [ROUTER_DIRECTIVES, HasRoleDirective, HasAnyRoleDirective, IsAuthDirective]
})
export class NavBarComponent {

	public user = {};

	subscription: Subscription;

	constructor(public router: Router, public userService: UserService) {
		this.subscription = userService.userChanged$.subscribe(data => {
			this.user = data;
		})
	}
}