import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {NavBarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {LoggedInRouterOutlet} from "./routeroutlets/loggedIn.routeroutlet";

@Component({
    selector: 'my-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `,
    directives: [NavBarComponent, LoggedInRouterOutlet]
})
@RouteConfig([
    {path: '/accueil', name:'Accueil', component: AccueilComponent, useAsDefault: true},
    {path: '/login', name:'Login', component: LoginComponent},
    {path: '/users', name:'Users', component: LoginComponent}
])
export class AppComponent {
    
}