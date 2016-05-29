import {Component, ElementRef} from 'angular2/core';
import {
    FormBuilder, ControlGroup, Validators, FORM_DIRECTIVES,
    AbstractControl, Control
} from "angular2/common";
import {LoginService} from "../services/login.service";
import {Router, CanActivate} from "angular2/router";
import 'rxjs/observable/interval';
import {HasRoleDirective} from "../shared/auth/has-role.directive";
import {SignupService} from "../services/signup.service";
import {Observable} from "rxjs/Observable";

declare var jQuery: any;

@Component({
    selector: 'accueil',
    templateUrl: '/client/dev/login/login.html',
    directives: [FORM_DIRECTIVES, HasRoleDirective]
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

    constructor(private router: Router, builder: FormBuilder, private loginService: LoginService, private el: ElementRef, private signupService: SignupService) {
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
            ]), Validators.composeAsync([(control: Control) => this.uniqueEmail(control)])
            ],
            password: ["", Validators.required],
            passwordConfirmation: ["", Validators.required]
        }, {validator: this.matchingPasswords('password', 'passwordConfirmation')});

        this.userSignupControlUsername = this.userSignupForm.controls["username"];
        this.userSignupControlEmail = this.userSignupForm.controls["email"];
        this.userSignupControlPassword = this.userSignupForm.controls["password"];
        this.userSignupControlPasswordConfirmation = this.userSignupForm.controls["passwordConfirmation"];
    };


    private uniqueEmail(control: Control): Observable<{[key: string]: boolean}> {
        return Observable.create(observer => {
            if (!control.value) {
                observer.next({unique: false});
                observer.complete();
            } else {
                this.signupService
                    .isEmailUnique(control.value)
                    .subscribe(res => {
                        if (res) {
                            observer.next(null);
                            observer.complete();
                        } else {
                            observer.next({unique: res});
                            observer.complete();
                        }
                    });
            }
        });
    };
    
    private matchingPasswords = function(passwordKey: string, confirmPasswordKey: string): { [s: string]: boolean } {
        return (group: ControlGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    };

    login() {
        var _loginData = {
            username: this.userSigninForm.value.username,
            password: this.userSigninForm.value.password
        };
        this.loginService
            .login(_loginData)
            .subscribe(rep => {
                this.router.navigate(['Accueil']);
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
    };

    signup() {
        var _signupData = {
            username: this.userSignupForm.value.username,
            email: this.userSignupForm.value.email,
            password: this.userSignupForm.value.password,
            passwordConfirmation: this.userSignupForm.value.passwordConfirmation
        };
        this.signupService
            .signup(_signupData)
            .subscribe(rep => {

            }, err => {

            });
    };
}