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
    var LoginService;
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
            let LoginService = class LoginService {
                constructor(_http) {
                    this._http = _http;
                }
                login(loginData) {
                    let _body = JSON.stringify(loginData), _headers = new http_1.Headers({ 'Content-Type': 'application/json' }), _options = new http_1.RequestOptions({ headers: _headers });
                    return this._http
                        .post('/api/login', _body, _options)
                        .map(res => {
                        res;
                    });
                }
                ;
                logout() {
                    return this._http
                        .delete('/api/login')
                        .map(res => res);
                }
                ;
            };
            LoginService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], LoginService);
            exports_1("LoginService", LoginService);
        }
    }
});
// (function(){
// 	'use strict'
//
// 	angular.module('theGame')
// 		.factory('LoginService', [
// 			'$q',
// 			'$http',
// 			'LoginResource',
// 			'UserService',
// 			loginResource
// 		]);
//
// 	function loginResource($q, $http, LoginResource, UserService) {
//	
// 		return {
// 			login: function(userInfo) {
// 				var p = $q.defer();
// 				LoginResource.login(userInfo).$promise.then(function(rep) {
// 					UserService.init();
// 					p.resolve(rep.data);
// 				}, function(err) {
// 					p.reject(err.data);
// 				})
// 				return p.promise;
// 			},
// 			logout: function() {
// 				var p = $q.defer();
// 				LoginResource.logout().$promise.then(function(data) {
// 					UserService.init()
//   					p.resolve(true);
// 				})
// 				return p.promise;
// 			},
// 			motDePasseOubli: function(email) {
// 				var p = $q.defer();
// 				$http.get('api/forgot/email/' + email).then(function(rep) {
// 					p.resolve(rep.data);
// 				}, function(err) {
// 					p.reject(err.data);
// 				})
// 				return p.promise;
// 			},
// 			changePassword: function(userInfo) {
// 				var p = $q.defer();
// 				$http.post('api/forgot/', userInfo).then(function(rep) {
// 					p.resolve(rep.data);
// 				}, function(err) {
// 					p.reject(err.data);
// 				})
// 				return p.promise;
// 			}
// 		}  
//   	}
// })(); 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUMsWUFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLEtBQUssQ0FBQyxTQUFTO29CQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ3BDLFFBQVEsR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLEVBQzVELFFBQVEsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO3lCQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQzt5QkFDbkMsR0FBRyxDQUFDLEdBQUc7d0JBQ1AsR0FBRyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7O2dCQUVELE1BQU07b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO3lCQUNmLE1BQU0sQ0FBQyxZQUFZLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7O1lBRUYsQ0FBQztZQXZCRDtnQkFBQyxpQkFBVSxFQUFFOzs0QkFBQTtZQUNiLHVDQXNCQyxDQUFBOzs7O0FBS0QsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixFQUFFO0FBQ0YsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixXQUFXO0FBQ1gsY0FBYztBQUNkLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLFFBQVE7QUFDUixFQUFFO0FBQ0YsbUVBQW1FO0FBQ25FLEdBQUc7QUFDSCxhQUFhO0FBQ2IsaUNBQWlDO0FBQ2pDLDBCQUEwQjtBQUMxQixrRUFBa0U7QUFDbEUsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsNERBQTREO0FBQzVELDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsU0FBUztBQUNULHdCQUF3QjtBQUN4QixRQUFRO0FBQ1Isd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQixrRUFBa0U7QUFDbEUsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsMENBQTBDO0FBQzFDLDBCQUEwQjtBQUMxQiwrREFBK0Q7QUFDL0QsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULHdCQUF3QjtBQUN4QixPQUFPO0FBQ1AsUUFBUTtBQUNSLE9BQU87QUFDUCxRQUFRIiwiZmlsZSI6InNlcnZpY2VzL2xvZ2luLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXHRcblx0bG9naW4obG9naW5EYXRhKSB7XG5cdFx0bGV0IF9ib2R5ID0gSlNPTi5zdHJpbmdpZnkobG9naW5EYXRhKSxcblx0XHRcdF9oZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSxcblx0XHRcdF9vcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogX2hlYWRlcnMgfSk7XG5cblx0XHRyZXR1cm4gdGhpcy5faHR0cFxuXHRcdFx0XHQucG9zdCgnL2FwaS9sb2dpbicsIF9ib2R5LCBfb3B0aW9ucylcblx0XHRcdFx0Lm1hcChyZXMgPT4ge1xuXHRcdFx0XHRcdHJlcztcblx0XHRcdFx0fSk7XG5cdH07XG5cblx0bG9nb3V0KCkge1xuXHRcdHJldHVybiB0aGlzLl9odHRwXG5cdFx0XHQuZGVsZXRlKCcvYXBpL2xvZ2luJylcblx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH07XG5cdFxufVxuXG5cblxuXG4vLyAoZnVuY3Rpb24oKXtcbi8vIFx0J3VzZSBzdHJpY3QnXG4vL1xuLy8gXHRhbmd1bGFyLm1vZHVsZSgndGhlR2FtZScpXG4vLyBcdFx0LmZhY3RvcnkoJ0xvZ2luU2VydmljZScsIFtcbi8vIFx0XHRcdCckcScsXG4vLyBcdFx0XHQnJGh0dHAnLFxuLy8gXHRcdFx0J0xvZ2luUmVzb3VyY2UnLFxuLy8gXHRcdFx0J1VzZXJTZXJ2aWNlJyxcbi8vIFx0XHRcdGxvZ2luUmVzb3VyY2Vcbi8vIFx0XHRdKTtcbi8vXG4vLyBcdGZ1bmN0aW9uIGxvZ2luUmVzb3VyY2UoJHEsICRodHRwLCBMb2dpblJlc291cmNlLCBVc2VyU2VydmljZSkge1xuLy9cdFxuLy8gXHRcdHJldHVybiB7XG4vLyBcdFx0XHRsb2dpbjogZnVuY3Rpb24odXNlckluZm8pIHtcbi8vIFx0XHRcdFx0dmFyIHAgPSAkcS5kZWZlcigpO1xuLy8gXHRcdFx0XHRMb2dpblJlc291cmNlLmxvZ2luKHVzZXJJbmZvKS4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcCkge1xuLy8gXHRcdFx0XHRcdFVzZXJTZXJ2aWNlLmluaXQoKTtcbi8vIFx0XHRcdFx0XHRwLnJlc29sdmUocmVwLmRhdGEpO1xuLy8gXHRcdFx0XHR9LCBmdW5jdGlvbihlcnIpIHtcbi8vIFx0XHRcdFx0XHRwLnJlamVjdChlcnIuZGF0YSk7XG4vLyBcdFx0XHRcdH0pXG4vLyBcdFx0XHRcdHJldHVybiBwLnByb21pc2U7XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0bG9nb3V0OiBmdW5jdGlvbigpIHtcbi8vIFx0XHRcdFx0dmFyIHAgPSAkcS5kZWZlcigpO1xuLy8gXHRcdFx0XHRMb2dpblJlc291cmNlLmxvZ291dCgpLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gXHRcdFx0XHRcdFVzZXJTZXJ2aWNlLmluaXQoKVxuLy8gICBcdFx0XHRcdFx0cC5yZXNvbHZlKHRydWUpO1xuLy8gXHRcdFx0XHR9KVxuLy8gXHRcdFx0XHRyZXR1cm4gcC5wcm9taXNlO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdG1vdERlUGFzc2VPdWJsaTogZnVuY3Rpb24oZW1haWwpIHtcbi8vIFx0XHRcdFx0dmFyIHAgPSAkcS5kZWZlcigpO1xuLy8gXHRcdFx0XHQkaHR0cC5nZXQoJ2FwaS9mb3Jnb3QvZW1haWwvJyArIGVtYWlsKS50aGVuKGZ1bmN0aW9uKHJlcCkge1xuLy8gXHRcdFx0XHRcdHAucmVzb2x2ZShyZXAuZGF0YSk7XG4vLyBcdFx0XHRcdH0sIGZ1bmN0aW9uKGVycikge1xuLy8gXHRcdFx0XHRcdHAucmVqZWN0KGVyci5kYXRhKTtcbi8vIFx0XHRcdFx0fSlcbi8vIFx0XHRcdFx0cmV0dXJuIHAucHJvbWlzZTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRjaGFuZ2VQYXNzd29yZDogZnVuY3Rpb24odXNlckluZm8pIHtcbi8vIFx0XHRcdFx0dmFyIHAgPSAkcS5kZWZlcigpO1xuLy8gXHRcdFx0XHQkaHR0cC5wb3N0KCdhcGkvZm9yZ290LycsIHVzZXJJbmZvKS50aGVuKGZ1bmN0aW9uKHJlcCkge1xuLy8gXHRcdFx0XHRcdHAucmVzb2x2ZShyZXAuZGF0YSk7XG4vLyBcdFx0XHRcdH0sIGZ1bmN0aW9uKGVycikge1xuLy8gXHRcdFx0XHRcdHAucmVqZWN0KGVyci5kYXRhKTtcbi8vIFx0XHRcdFx0fSlcbi8vIFx0XHRcdFx0cmV0dXJuIHAucHJvbWlzZTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9ICBcbi8vICAgXHR9XG4vLyB9KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
