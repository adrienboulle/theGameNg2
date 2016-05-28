import {Component} from 'angular2/core';
import {UserService} from "../services/user.service";
import {UserData} from "../services/userData";
import {LoginService} from "../services/login.service";
import {Router} from "angular2/router";

@Component({
    templateUrl: '/client/dev/accueil/accueil.html'
})
export class AccueilComponent {

    private userData: UserData;

    constructor(private _router: Router, private _loginService: LoginService) {

    }

    logout() {
        this._loginService
            .logout()
            .subscribe(res => {
                this._router.navigate(['Login']);
            });
    }
}