System.register(["angular2/router", "angular2/core", "../services/user.service", "rxjs/Observable"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var router_1, core_1, user_service_1, Observable_1;
    var LoggedInRouterOutlet;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            let LoggedInRouterOutlet = class LoggedInRouterOutlet extends router_1.RouterOutlet {
                constructor(_elementRef, _loader, _parentRouter, nameAttr, _userService) {
                    super(_elementRef, _loader, _parentRouter, nameAttr);
                    this._parentRouter = _parentRouter;
                    this._userService = _userService;
                }
                activate(instruction) {
                    this._canActivate(instruction.urlPath)
                        .subscribe(can => {
                        if (can === true) {
                            return super.activate(instruction);
                        }
                    });
                }
                _canActivate(url) {
                    return Observable_1.Observable.create(observer => {
                        this._userService
                            .isAuthenticated(true)
                            .subscribe(isLoogedIn => {
                            if (isLoogedIn) {
                                if (url === "login") {
                                    this._parentRouter.navigate(['Accueil']);
                                    observer.next(false);
                                    observer.complete();
                                }
                                else {
                                    observer.next(true);
                                    observer.complete();
                                }
                            }
                            else {
                                if (url === "accueil") {
                                    this._parentRouter.navigate(['Login']);
                                    observer.next(false);
                                    observer.complete();
                                }
                                else {
                                    observer.next(true);
                                    observer.complete();
                                }
                            }
                        });
                    });
                }
            };
            LoggedInRouterOutlet = __decorate([
                core_1.Directive({
                    selector: 'router-outlet'
                }),
                __param(3, core_1.Attribute('name')), 
                __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_1.Router, String, user_service_1.UserService])
            ], LoggedInRouterOutlet);
            exports_1("LoggedInRouterOutlet", LoggedInRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcm91dGxldHMvbG9nZ2VkSW4ucm91dGVyb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUEsOERBQTBDLHFCQUFZO2dCQUdsRCxZQUNJLFdBQTZCLEVBQUUsT0FBK0IsRUFDdEQsYUFBcUIsRUFBcUIsUUFBZ0IsRUFDMUQsWUFBeUI7b0JBQ2pDLE1BQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRjdDLGtCQUFhLEdBQWIsYUFBYSxDQUFRO29CQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFHckMsQ0FBQztnQkFFRCxRQUFRLENBQUMsV0FBaUM7b0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzt5QkFDakMsU0FBUyxDQUFDLEdBQUc7d0JBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxZQUFZLENBQUMsR0FBRztvQkFDWixNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDN0IsSUFBSSxDQUFDLFlBQVk7NkJBQ1osZUFBZSxDQUFDLElBQUksQ0FBQzs2QkFDckIsU0FBUyxDQUFDLFVBQVU7NEJBQ2pCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0NBQ2IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0NBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQ0FDekMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dDQUN4QixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDeEIsQ0FBQzs0QkFDTCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29DQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0NBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDeEIsQ0FBQztnQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDSixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0NBQ3hCLENBQUM7NEJBQ0wsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQWxERDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1QixDQUFDOzJCQU1zQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQzs7b0NBTnZEO1lBQ0YsdURBK0NDLENBQUEiLCJmaWxlIjoicm91dGVyb3V0bGV0cy9sb2dnZWRJbi5yb3V0ZXJvdXRsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlck91dGxldCwgUm91dGVyLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtEaXJlY3RpdmUsIER5bmFtaWNDb21wb25lbnRMb2FkZXIsIEF0dHJpYnV0ZSwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ3JvdXRlci1vdXRsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcbiAgICBwdWJsaWNSb3V0ZXM6IEFycmF5O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIF9lbGVtZW50UmVmOiBWaWV3Q29udGFpbmVyUmVmLCBfbG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgICAgICBwcml2YXRlIF9wYXJlbnRSb3V0ZXI6IFJvdXRlciwgQEF0dHJpYnV0ZSgnbmFtZScpIG5hbWVBdHRyOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICBzdXBlcihfZWxlbWVudFJlZiwgX2xvYWRlciwgX3BhcmVudFJvdXRlciwgbmFtZUF0dHIpO1xuXG4gICAgfVxuXG4gICAgYWN0aXZhdGUoaW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NhbkFjdGl2YXRlKGluc3RydWN0aW9uLnVybFBhdGgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNhbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIuYWN0aXZhdGUoaW5zdHJ1Y3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jYW5BY3RpdmF0ZSh1cmwpIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmlzQXV0aGVudGljYXRlZCh0cnVlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoaXNMb29nZWRJbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xvb2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcImxvZ2luXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRSb3V0ZXIubmF2aWdhdGUoWydBY2N1ZWlsJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFwiYWNjdWVpbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Um91dGVyLm5hdmlnYXRlKFsnTG9naW4nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
