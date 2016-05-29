System.register(['angular2/core', "angular2/common", "../services/login.service", "angular2/router", 'rxjs/observable/interval', "../shared/auth/has-role.directive", "../services/signup.service", "rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, login_service_1, router_1, has_role_directive_1, signup_service_1, Observable_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (has_role_directive_1_1) {
                has_role_directive_1 = has_role_directive_1_1;
            },
            function (signup_service_1_1) {
                signup_service_1 = signup_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(router, builder, loginService, el, signupService) {
                    this.router = router;
                    this.loginService = loginService;
                    this.el = el;
                    this.signupService = signupService;
                    this.matchingPasswords = function (passwordKey, confirmPasswordKey) {
                        return (group) => {
                            let password = group.controls[passwordKey];
                            let confirmPassword = group.controls[confirmPasswordKey];
                            if (password.value !== confirmPassword.value) {
                                return {
                                    mismatchedPasswords: true
                                };
                            }
                        };
                    };
                    this.userSigninForm = builder.group({
                        username: ["", common_1.Validators.required],
                        password: ["", common_1.Validators.required]
                    });
                    this.userSigninControlUsername = this.userSigninForm.controls["username"];
                    this.userSigninControlPassword = this.userSigninForm.controls["password"];
                    this.userSignupForm = builder.group({
                        username: ["", common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(15)])
                        ],
                        email: ["", common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
                            ]), common_1.Validators.composeAsync([(control) => this.uniqueEmail(control)])
                        ],
                        password: ["", common_1.Validators.required],
                        passwordConfirmation: ["", common_1.Validators.required]
                    }, { validator: this.matchingPasswords('password', 'passwordConfirmation') });
                    this.userSignupControlUsername = this.userSignupForm.controls["username"];
                    this.userSignupControlEmail = this.userSignupForm.controls["email"];
                    this.userSignupControlPassword = this.userSignupForm.controls["password"];
                    this.userSignupControlPasswordConfirmation = this.userSignupForm.controls["passwordConfirmation"];
                }
                ;
                uniqueEmail(control) {
                    return Observable_1.Observable.create(observer => {
                        if (!control.value) {
                            observer.next({ unique: false });
                            observer.complete();
                        }
                        else {
                            this.signupService
                                .isEmailUnique(control.value)
                                .subscribe(res => {
                                if (res) {
                                    observer.next(null);
                                    observer.complete();
                                }
                                else {
                                    observer.next({ unique: res });
                                    observer.complete();
                                }
                            });
                        }
                    });
                }
                ;
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
                        }
                        else if (err._body.indexOf('ERVAL009') != -1) {
                            this.erreurLogin = 'Votre compte n\'a pas été activé';
                        }
                        else if (err._body.indexOf('ERLOG403') != -1) {
                            this.erreurLogin = 'Mot de passe erroné';
                        }
                        else if (err._body.indexOf('ERLOG404') != -1) {
                            this.erreurLogin = 'Utilisateur inexistant';
                        }
                    });
                }
                ;
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
                }
                ;
            };
            LoginComponent = __decorate([
                core_1.Component({
                    selector: 'accueil',
                    templateUrl: '/client/dev/login/login.html',
                    directives: [common_1.FORM_DIRECTIVES, has_role_directive_1.HasRoleDirective]
                }),
                router_1.CanActivate((next, prev) => {
                    return true;
                }), 
                __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, login_service_1.LoginService, core_1.ElementRef, signup_service_1.SignupService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBY0ksWUFBb0IsTUFBYyxFQUFFLE9BQW9CLEVBQVUsWUFBMEIsRUFBVSxFQUFjLEVBQVUsYUFBNEI7b0JBQXRJLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQWdDLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBb0RsSixzQkFBaUIsR0FBRyxVQUFTLFdBQW1CLEVBQUUsa0JBQTBCO3dCQUNoRixNQUFNLENBQUMsQ0FBQyxLQUFtQjs0QkFDdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDM0MsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzRCQUN6RCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUMzQyxNQUFNLENBQUM7b0NBQ0gsbUJBQW1CLEVBQUUsSUFBSTtpQ0FDNUIsQ0FBQzs0QkFDTixDQUFDO3dCQUNMLENBQUMsQ0FBQTtvQkFDTCxDQUFDLENBQUM7b0JBN0RFLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzt3QkFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQ3RDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FB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Q0FBQyxLQUFLO3dCQUN0QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUTt3QkFDNUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CO3FCQUN2RSxDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhO3lCQUNiLE1BQU0sQ0FBQyxXQUFXLENBQUM7eUJBQ25CLFNBQVMsQ0FBQyxHQUFHO29CQUVkLENBQUMsRUFBRSxHQUFHO29CQUVOLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7O1lBQ0wsQ0FBQztZQTNIRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHFDQUFnQixDQUFDO2lCQUNsRCxDQUFDO2dCQUNELG9CQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtvQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDOzs4QkFBQTtZQUNGLDJDQW1IQyxDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7XG4gICAgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgRk9STV9ESVJFQ1RJVkVTLFxuICAgIEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFxufSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0ICdyeGpzL29ic2VydmFibGUvaW50ZXJ2YWwnO1xuaW1wb3J0IHtIYXNSb2xlRGlyZWN0aXZlfSBmcm9tIFwiLi4vc2hhcmVkL2F1dGgvaGFzLXJvbGUuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1NpZ251cFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWdudXAuc2VydmljZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FjY3VlaWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnL2NsaWVudC9kZXYvbG9naW4vbG9naW4uaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgSGFzUm9sZURpcmVjdGl2ZV1cbn0pXG5AQ2FuQWN0aXZhdGUoKG5leHQsIHByZXYpID0+IHtcbiAgICByZXR1cm4gdHJ1ZTtcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgZXJyZXVyTG9naW46IHN0cmluZztcblxuICAgIHVzZXJTaWduaW5Gb3JtOiBDb250cm9sR3JvdXA7XG4gICAgdXNlclNpZ25pbkNvbnRyb2xVc2VybmFtZTogQWJzdHJhY3RDb250cm9sO1xuICAgIHVzZXJTaWduaW5Db250cm9sUGFzc3dvcmQ6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHVzZXJTaWdudXBGb3JtOiBDb250cm9sR3JvdXA7XG4gICAgdXNlclNpZ251cENvbnRyb2xVc2VybmFtZTogQWJzdHJhY3RDb250cm9sO1xuICAgIHVzZXJTaWdudXBDb250cm9sRW1haWw6IEFic3RyYWN0Q29udHJvbDtcbiAgICB1c2VyU2lnbnVwQ29udHJvbFBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG4gICAgdXNlclNpZ251cENvbnRyb2xQYXNzd29yZENvbmZpcm1hdGlvbjogQWJzdHJhY3RDb250cm9sO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgYnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2lnbnVwU2VydmljZTogU2lnbnVwU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXJTaWduaW5Gb3JtID0gYnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VyU2lnbmluQ29udHJvbFVzZXJuYW1lID0gdGhpcy51c2VyU2lnbmluRm9ybS5jb250cm9sc1tcInVzZXJuYW1lXCJdO1xuICAgICAgICB0aGlzLnVzZXJTaWduaW5Db250cm9sUGFzc3dvcmQgPSB0aGlzLnVzZXJTaWduaW5Gb3JtLmNvbnRyb2xzW1wicGFzc3dvcmRcIl07XG5cblxuICAgICAgICB0aGlzLnVzZXJTaWdudXBGb3JtID0gYnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxNSldKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGVtYWlsOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS1dK1xcXFwuW2EtekEtWjAtOS0uXSskJylcbiAgICAgICAgICAgIF0pLCBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbKGNvbnRyb2w6IENvbnRyb2wpID0+IHRoaXMudW5pcXVlRW1haWwoY29udHJvbCldKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IHRoaXMubWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJyl9KTtcblxuICAgICAgICB0aGlzLnVzZXJTaWdudXBDb250cm9sVXNlcm5hbWUgPSB0aGlzLnVzZXJTaWdudXBGb3JtLmNvbnRyb2xzW1widXNlcm5hbWVcIl07XG4gICAgICAgIHRoaXMudXNlclNpZ251cENvbnRyb2xFbWFpbCA9IHRoaXMudXNlclNpZ251cEZvcm0uY29udHJvbHNbXCJlbWFpbFwiXTtcbiAgICAgICAgdGhpcy51c2VyU2lnbnVwQ29udHJvbFBhc3N3b3JkID0gdGhpcy51c2VyU2lnbnVwRm9ybS5jb250cm9sc1tcInBhc3N3b3JkXCJdO1xuICAgICAgICB0aGlzLnVzZXJTaWdudXBDb250cm9sUGFzc3dvcmRDb25maXJtYXRpb24gPSB0aGlzLnVzZXJTaWdudXBGb3JtLmNvbnRyb2xzW1wicGFzc3dvcmRDb25maXJtYXRpb25cIl07XG4gICAgfTtcblxuXG4gICAgcHJpdmF0ZSB1bmlxdWVFbWFpbChjb250cm9sOiBDb250cm9sKTogT2JzZXJ2YWJsZTx7W2tleTogc3RyaW5nXTogYm9vbGVhbn0+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIGlmICghY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe3VuaXF1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ251cFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmlzRW1haWxVbmlxdWUoY29udHJvbC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7dW5pcXVlOiByZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBwcml2YXRlIG1hdGNoaW5nUGFzc3dvcmRzID0gZnVuY3Rpb24ocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpOiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgICAgICByZXR1cm4gKGdyb3VwOiBDb250cm9sR3JvdXApOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4gICAgICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHZhciBfbG9naW5EYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlclNpZ25pbkZvcm0udmFsdWUudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyU2lnbmluRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZVxuICAgICAgICAgICAgLmxvZ2luKF9sb2dpbkRhdGEpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydBY2N1ZWlsJ10pO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLl9ib2R5LmluZGV4T2YoJ0VSTE9HNDAxJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJldXJMb2dpbiA9ICdWb3RyZSBjb21wdGUgYSDDqXTDqSBkw6lzYWN0aXbDqSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnIuX2JvZHkuaW5kZXhPZignRVJWQUwwMDknKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycmV1ckxvZ2luID0gJ1ZvdHJlIGNvbXB0ZSBuXFwnYSBwYXMgw6l0w6kgYWN0aXbDqSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnIuX2JvZHkuaW5kZXhPZignRVJMT0c0MDMnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycmV1ckxvZ2luID0gJ01vdCBkZSBwYXNzZSBlcnJvbsOpJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVyci5fYm9keS5pbmRleE9mKCdFUkxPRzQwNCcpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyZXVyTG9naW4gPSAnVXRpbGlzYXRldXIgaW5leGlzdGFudCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNpZ251cCgpIHtcbiAgICAgICAgdmFyIF9zaWdudXBEYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlclNpZ251cEZvcm0udmFsdWUudXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy51c2VyU2lnbnVwRm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXJTaWdudXBGb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246IHRoaXMudXNlclNpZ251cEZvcm0udmFsdWUucGFzc3dvcmRDb25maXJtYXRpb25cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zaWdudXBTZXJ2aWNlXG4gICAgICAgICAgICAuc2lnbnVwKF9zaWdudXBEYXRhKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXAgPT4ge1xuXG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
