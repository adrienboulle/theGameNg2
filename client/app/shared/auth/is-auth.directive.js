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
    var IsAuthDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let IsAuthDirective = class IsAuthDirective {
                constructor(el, userService) {
                    this.el = el;
                    this.userService = userService;
                }
                ngOnInit() {
                    this.subscription = this.userService.userChanged$.subscribe(data => {
                        if (data.isAuthenticated !== this.isAuth) {
                            this.el.nativeElement.classList.add('hidden');
                        }
                        else {
                            this.el.nativeElement.classList.remove('hidden');
                        }
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], IsAuthDirective.prototype, "isAuth", void 0);
            IsAuthDirective = __decorate([
                core_1.Directive({
                    selector: '[isAuth]'
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, user_service_1.UserService])
            ], IsAuthDirective);
            exports_1("IsAuthDirective", IsAuthDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoL2lzLWF1dGguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUksWUFBb0IsRUFBYyxFQUFVLFdBQXdCO29CQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQUFHLENBQUM7Z0JBSXhFLFFBQVE7b0JBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSTt3QkFDNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbEQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFJTCxDQUFDO1lBRkc7Z0JBQUMsWUFBSyxFQUFFOzsyREFBQTtZQW5CWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO2lCQUN2QixDQUFDOzsrQkFBQTtZQUNGLDZDQWtCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hdXRoL2lzLWF1dGguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lzQXV0aF0nXG59KVxuZXhwb3J0IGNsYXNzIElzQXV0aERpcmVjdGl2ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy51c2VyU2VydmljZS51c2VyQ2hhbmdlZCQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNBdXRoZW50aWNhdGVkICE9PSB0aGlzLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBpc0F1dGg6IGJvb2xlYW47XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
