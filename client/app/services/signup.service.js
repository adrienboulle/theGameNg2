System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SignupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let SignupService = class SignupService {
                constructor(http) {
                    this.http = http;
                }
                signup(signupData) {
                    let _body = JSON.stringify(signupData), _headers = new http_1.Headers({ 'Content-Type': 'application/json' }), _options = new http_1.RequestOptions({ headers: _headers });
                    return this.http
                        .post('/api/signup', _body, _options)
                        .map(res => {
                        return res;
                    });
                }
                ;
                isEmailUnique(email) {
                    return this.http
                        .get('/api/signup/email/' + email)
                        .map(res => {
                        return !res.json().exists;
                    });
                }
                ;
            };
            SignupService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], SignupService);
            exports_1("SignupService", SignupService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NpZ251cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUVDLFlBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBRyxDQUFDO2dCQUVsQyxNQUFNLENBQUMsVUFBVTtvQkFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDckMsUUFBUSxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsRUFDNUQsUUFBUSxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUV0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO3lCQUNwQyxHQUFHLENBQUMsR0FBRzt3QkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7O2dCQUVELGFBQWEsQ0FBQyxLQUFLO29CQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ2QsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQzt5QkFDakMsR0FBRyxDQUFDLEdBQUc7d0JBQ1AsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzs7WUFFRixDQUFDO1lBekJEO2dCQUFDLGlCQUFVLEVBQUU7OzZCQUFBO1lBQ2IseUNBd0JDLENBQUEiLCJmaWxlIjoic2VydmljZXMvc2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lnbnVwU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cdHNpZ251cChzaWdudXBEYXRhKSB7XG5cdFx0bGV0IF9ib2R5ID0gSlNPTi5zdHJpbmdpZnkoc2lnbnVwRGF0YSksXG5cdFx0XHRfaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG5cdFx0XHRfb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IF9oZWFkZXJzIH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxuXHRcdFx0LnBvc3QoJy9hcGkvc2lnbnVwJywgX2JvZHksIF9vcHRpb25zKVxuXHRcdFx0Lm1hcChyZXMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0aXNFbWFpbFVuaXF1ZShlbWFpbCkge1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5nZXQoJy9hcGkvc2lnbnVwL2VtYWlsLycgKyBlbWFpbClcblx0XHRcdC5tYXAocmVzID0+IHtcblx0XHRcdFx0cmV0dXJuICFyZXMuanNvbigpLmV4aXN0cztcblx0XHRcdH0pO1xuXHR9O1xuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
