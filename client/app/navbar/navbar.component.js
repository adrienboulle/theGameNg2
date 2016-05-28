System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var NavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let NavBarComponent = class NavBarComponent {
                constructor(router) {
                    this.router = router;
                }
            };
            NavBarComponent = __decorate([
                core_1.Component({
                    selector: 'nav-bar',
                    templateUrl: '/client/dev/navbar/navbar.html',
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_1.Router])
            ], NavBarComponent);
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUMsWUFBbUIsTUFBYztvQkFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO2dCQUFHLENBQUM7WUFDdEMsQ0FBQztZQVJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO2lCQUMvQixDQUFDOzsrQkFBQTtZQUNGLDZDQUdDLENBQUEiLCJmaWxlIjoibmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmF2LWJhcicsXG5cdHRlbXBsYXRlVXJsOiAnL2NsaWVudC9kZXYvbmF2YmFyL25hdmJhci5odG1sJyxcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
