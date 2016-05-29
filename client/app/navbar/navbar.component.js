System.register(['angular2/core', "angular2/router", "../services/user.service", "../shared/auth/has-role.directive", "../shared/auth/has-any-role.directive", "../shared/auth/is-auth.directive"], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, has_role_directive_1, has_any_role_directive_1, is_auth_directive_1;
    var NavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (has_role_directive_1_1) {
                has_role_directive_1 = has_role_directive_1_1;
            },
            function (has_any_role_directive_1_1) {
                has_any_role_directive_1 = has_any_role_directive_1_1;
            },
            function (is_auth_directive_1_1) {
                is_auth_directive_1 = is_auth_directive_1_1;
            }],
        execute: function() {
            let NavBarComponent = class NavBarComponent {
                constructor(router, userService) {
                    this.router = router;
                    this.userService = userService;
                    this.user = {};
                    this.subscription = userService.userChanged$.subscribe(data => {
                        this.user = data;
                    });
                }
            };
            NavBarComponent = __decorate([
                core_1.Component({
                    selector: 'nav-bar',
                    templateUrl: '/client/dev/navbar/navbar.html',
                    directives: [router_1.ROUTER_DIRECTIVES, has_role_directive_1.HasRoleDirective, has_any_role_directive_1.HasAnyRoleDirective, is_auth_directive_1.IsAuthDirective]
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
            ], NavBarComponent);
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBTUMsWUFBbUIsTUFBYyxFQUFTLFdBQXdCO29CQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUozRCxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUtoQixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUk7d0JBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDSCxDQUFDO1lBQ0YsQ0FBQztZQWhCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxxQ0FBZ0IsRUFBRSw0Q0FBbUIsRUFBRSxtQ0FBZSxDQUFDO2lCQUN2RixDQUFDOzsrQkFBQTtZQUNGLDZDQVdDLENBQUEiLCJmaWxlIjoibmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7SGFzUm9sZURpcmVjdGl2ZX0gZnJvbSBcIi4uL3NoYXJlZC9hdXRoL2hhcy1yb2xlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtIYXNBbnlSb2xlRGlyZWN0aXZlfSBmcm9tIFwiLi4vc2hhcmVkL2F1dGgvaGFzLWFueS1yb2xlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtJc0F1dGhEaXJlY3RpdmV9IGZyb20gXCIuLi9zaGFyZWQvYXV0aC9pcy1hdXRoLmRpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduYXYtYmFyJyxcblx0dGVtcGxhdGVVcmw6ICcvY2xpZW50L2Rldi9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhhc1JvbGVEaXJlY3RpdmUsIEhhc0FueVJvbGVEaXJlY3RpdmUsIElzQXV0aERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2QmFyQ29tcG9uZW50IHtcblxuXHRwdWJsaWMgdXNlciA9IHt9O1xuXG5cdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdXNlclNlcnZpY2UudXNlckNoYW5nZWQkLnN1YnNjcmliZShkYXRhID0+IHtcblx0XHRcdHRoaXMudXNlciA9IGRhdGE7XG5cdFx0fSlcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
