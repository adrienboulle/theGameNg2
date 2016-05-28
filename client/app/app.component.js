System.register(['angular2/core', "angular2/router", "./accueil/accueil.component", "./navbar/navbar.component", "./login/login.component", "./routeroutlets/loggedIn.routeroutlet"], function(exports_1, context_1) {
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
    var core_1, router_1, accueil_component_1, navbar_component_1, login_component_1, loggedIn_routeroutlet_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (accueil_component_1_1) {
                accueil_component_1 = accueil_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (loggedIn_routeroutlet_1_1) {
                loggedIn_routeroutlet_1 = loggedIn_routeroutlet_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `,
                    directives: [navbar_component_1.NavBarComponent, loggedIn_routeroutlet_1.LoggedInRouterOutlet]
                }),
                router_1.RouteConfig([
                    { path: '/accueil', name: 'Accueil', component: accueil_component_1.AccueilComponent, useAsDefault: true },
                    { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                    { path: '/users', name: 'Users', component: login_component_1.LoginComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7WUFFQSxDQUFDO1lBZkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFOzs7S0FHVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDRDQUFvQixDQUFDO2lCQUN0RCxDQUFDO2dCQUNELG9CQUFXLENBQUM7b0JBQ1QsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7b0JBQ25GLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO29CQUN6RCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztpQkFDNUQsQ0FBQzs7NEJBQUE7WUFDRix1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtBY2N1ZWlsQ29tcG9uZW50fSBmcm9tIFwiLi9hY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdkJhckNvbXBvbmVudH0gZnJvbSBcIi4vbmF2YmFyL25hdmJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dnZWRJblJvdXRlck91dGxldH0gZnJvbSBcIi4vcm91dGVyb3V0bGV0cy9sb2dnZWRJbi5yb3V0ZXJvdXRsZXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXYtYmFyPjwvbmF2LWJhcj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05hdkJhckNvbXBvbmVudCwgTG9nZ2VkSW5Sb3V0ZXJPdXRsZXRdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9hY2N1ZWlsJywgbmFtZTonQWNjdWVpbCcsIGNvbXBvbmVudDogQWNjdWVpbENvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7cGF0aDogJy9sb2dpbicsIG5hbWU6J0xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvdXNlcnMnLCBuYW1lOidVc2VycycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
