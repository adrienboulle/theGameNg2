import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {UserService} from "./services/user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {LoginService} from "./services/login.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, UserService, LoginService]);