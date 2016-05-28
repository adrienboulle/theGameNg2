import {Component, Injector} from 'angular2/core';
import {
    FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES,
    AbstractControl
} from "angular2/common";
import {LoginService} from "../services/login.service";
import {UserService} from "../services/user.service";
import {Router, CanActivate} from "angular2/router";

@Component({
    selector: 'accueil',
    templateUrl: '/client/dev/login/login.html',
    directives: [FORM_DIRECTIVES]
})
@CanActivate((next, prev) => {
    return true;
})
export class LoginComponent {

    erreurLogin: string;

    userSigninForm: ControlGroup;
    userSigninControlUsername: AbstractControl;
    userSigninControlPassword: AbstractControl;

    userSignupForm: ControlGroup;
    userSignupControlUsername: AbstractControl;
    userSignupControlEmail: AbstractControl;
    userSignupControlPassword: AbstractControl;
    userSignupControlPasswordConfirmation: AbstractControl;

    constructor(private _router: Router, builder: FormBuilder, private _loginService: LoginService) {
        this.userSigninForm = builder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
        this.userSigninControlUsername = this.userSigninForm.controls["username"];
        this.userSigninControlPassword = this.userSigninForm.controls["password"];


        this.userSignupForm = builder.group({
            username: ["", Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15)])
            ],
            email: ["", Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
            ])
            ],
            password: ["", Validators.required],
            passwordConfirmation: ["", Validators.required]
        });
        this.userSignupControlUsername = this.userSignupForm.controls["username"];
        this.userSignupControlEmail = this.userSignupForm.controls["email"];
        this.userSignupControlPassword = this.userSignupForm.controls["password"];
        this.userSignupControlPasswordConfirmation = this.userSignupForm.controls["passwordConfirmation"];
    }

    login() {
        var _loginData = {
            username: this.userSigninForm.value.username,
            password: this.userSigninForm.value.password,
        };
        this._loginService
            .login(_loginData)
            .subscribe(rep => {
                this._router.navigate(['Accueil']);
            }, err => {
                if (err._body.indexOf('ERLOG401') != -1) {
                    this.erreurLogin = 'Votre compte a été désactivé';
                } else if (err._body.indexOf('ERVAL009') != -1) {
                    this.erreurLogin = 'Votre compte n\'a pas été activé';
                } else if (err._body.indexOf('ERLOG403') != -1) {
                    this.erreurLogin = 'Mot de passe erroné';
                } else if (err._body.indexOf('ERLOG404') != -1) {
                    this.erreurLogin = 'Utilisateur inexistant';
                }
            });
    }
}