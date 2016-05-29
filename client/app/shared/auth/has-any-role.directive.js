System.register(["angular2/core", "../../services/user.service"], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var HasAnyRoleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let HasAnyRoleDirective = class HasAnyRoleDirective {
                constructor(el, userService) {
                    this.el = el;
                    this.userService = userService;
                }
                ngOnInit() {
                    this.subscription = this.userService.userChanged$.subscribe(data => {
                        this.userService
                            .hasRole(this.hasAnyRole)
                            .subscribe(has => {
                            if (has) {
                                this.el.nativeElement.classList.remove('hidden');
                            }
                            else {
                                this.el.nativeElement.classList.add('hidden');
                            }
                        });
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], HasAnyRoleDirective.prototype, "hasAnyRole", void 0);
            HasAnyRoleDirective = __decorate([
                core_1.Directive({
                    selector: '[hasAnyRole]'
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, user_service_1.UserService])
            ], HasAnyRoleDirective);
            exports_1("HasAnyRoleDirective", HasAnyRoleDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoL2hhcy1hbnktcm9sZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFSSxZQUFvQixFQUFjLEVBQVUsV0FBd0I7b0JBQWhELE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQUcsQ0FBQztnQkFJeEUsUUFBUTtvQkFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJO3dCQUM1RCxJQUFJLENBQUMsV0FBVzs2QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs2QkFDeEIsU0FBUyxDQUFDLEdBQUc7NEJBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDTixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNyRCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2xELENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUlMLENBQUM7WUFGRztnQkFBQyxZQUFLLEVBQUU7O21FQUFBO1lBdkJaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQzNCLENBQUM7O21DQUFBO1lBQ0YscURBc0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL2F1dGgvaGFzLWFueS1yb2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1toYXNBbnlSb2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgSGFzQW55Um9sZURpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyQ2hhbmdlZCQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgICAgICAgICAgIC5oYXNSb2xlKHRoaXMuaGFzQW55Um9sZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGhhcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBoYXNBbnlSb2xlOiBzdHJpbmdbXTtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
