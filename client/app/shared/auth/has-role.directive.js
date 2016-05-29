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
    var HasRoleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let HasRoleDirective = class HasRoleDirective {
                constructor(el, userService) {
                    this.el = el;
                    this.userService = userService;
                }
                ngOnInit() {
                    this.subscription = this.userService.userChanged$.subscribe(data => {
                        this.userService
                            .hasRole([this.hasRole])
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
                __metadata('design:type', String)
            ], HasRoleDirective.prototype, "hasRole", void 0);
            HasRoleDirective = __decorate([
                core_1.Directive({
                    selector: '[hasRole]'
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, user_service_1.UserService])
            ], HasRoleDirective);
            exports_1("HasRoleDirective", HasRoleDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoL2hhcy1yb2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVJLFlBQW9CLEVBQWMsRUFBVSxXQUF3QjtvQkFBaEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtnQkFBRyxDQUFDO2dCQUl4RSxRQUFRO29CQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUk7d0JBQzVELElBQUksQ0FBQyxXQUFXOzZCQUNYLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs2QkFDdkIsU0FBUyxDQUFDLEdBQUc7NEJBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDTixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNyRCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2xELENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUlMLENBQUM7WUFGRztnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBdkJaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7aUJBQ3hCLENBQUM7O2dDQUFBO1lBQ0YsK0NBc0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL2F1dGgvaGFzLXJvbGUuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaGFzUm9sZV0nXG59KVxuZXhwb3J0IGNsYXNzIEhhc1JvbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclNlcnZpY2UudXNlckNoYW5nZWQkLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2VcbiAgICAgICAgICAgICAgICAuaGFzUm9sZShbdGhpcy5oYXNSb2xlXSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGhhcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBoYXNSb2xlOiBzdHJpbmc7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
