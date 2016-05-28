System.register(['angular2/core', "../services/login.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1;
    var AccueilComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let AccueilComponent = class AccueilComponent {
                constructor(_router, _loginService) {
                    this._router = _router;
                    this._loginService = _loginService;
                }
                logout() {
                    this._loginService
                        .logout()
                        .subscribe(res => {
                        this._router.navigate(['Login']);
                    });
                }
            };
            AccueilComponent = __decorate([
                core_1.Component({
                    templateUrl: '/client/dev/accueil/accueil.html'
                }), 
                __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
            ], AccueilComponent);
            exports_1("AccueilComponent", AccueilComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY3VlaWwvYWNjdWVpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFJSSxZQUFvQixPQUFlLEVBQVUsYUFBMkI7b0JBQXBELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7Z0JBRXhFLENBQUM7Z0JBRUQsTUFBTTtvQkFDRixJQUFJLENBQUMsYUFBYTt5QkFDYixNQUFNLEVBQUU7eUJBQ1IsU0FBUyxDQUFDLEdBQUc7d0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO1lBQ0wsQ0FBQztZQWxCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxrQ0FBa0M7aUJBQ2xELENBQUM7O2dDQUFBO1lBQ0YsK0NBZUMsQ0FBQSIsImZpbGUiOiJhY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyRGF0YX0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXJEYXRhXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnL2NsaWVudC9kZXYvYWNjdWVpbC9hY2N1ZWlsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjY3VlaWxDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSB1c2VyRGF0YTogVXNlckRhdGE7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlXG4gICAgICAgICAgICAubG9nb3V0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydMb2dpbiddKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
