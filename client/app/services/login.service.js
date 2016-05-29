System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', "rxjs/Observable", "./user.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, user_service_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let LoginService = class LoginService {
                constructor(_http, _userService) {
                    this._http = _http;
                    this._userService = _userService;
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
                    return Observable_1.Observable.create(observer => {
                        this._http
                            .delete('/api/login')
                            .map(res => res)
                            .subscribe(res => {
                            this._userService.init();
                            observer.next(true);
                            observer.complete();
                        });
                    });
                }
                ;
            };
            LoginService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService])
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBRUMsWUFBb0IsS0FBVyxFQUFVLFlBQXlCO29CQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXRFLEtBQUssQ0FBQyxTQUFTO29CQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ3BDLFFBQVEsR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLEVBQzVELFFBQVEsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO3lCQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQzt5QkFDbkMsR0FBRyxDQUFDLEdBQUc7d0JBQ1AsR0FBRyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7O2dCQUVELE1BQU07b0JBQ0wsTUFBTSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFFBQVE7d0JBQ2hDLElBQUksQ0FBQyxLQUFLOzZCQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUM7NkJBQ3BCLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDOzZCQUNmLFNBQVMsQ0FBQyxHQUFHOzRCQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQzs7WUFFRixDQUFDO1lBOUJEO2dCQUFDLGlCQUFVLEVBQUU7OzRCQUFBO1lBQ2IsdUNBNkJDLENBQUE7Ozs7QUFLRCxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLEVBQUU7QUFDRiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLFdBQVc7QUFDWCxjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsUUFBUTtBQUNSLEVBQUU7QUFDRixtRUFBbUU7QUFDbkUsR0FBRztBQUNILGFBQWE7QUFDYixpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLGtFQUFrRTtBQUNsRSwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsU0FBUztBQUNULHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiw0REFBNEQ7QUFDNUQsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUix3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCLGtFQUFrRTtBQUNsRSw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUiwwQ0FBMEM7QUFDMUMsMEJBQTBCO0FBQzFCLCtEQUErRDtBQUMvRCw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLE9BQU87QUFDUCxRQUFRO0FBQ1IsT0FBTztBQUNQLFFBQVEiLCJmaWxlIjoic2VydmljZXMvbG9naW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cblx0bG9naW4obG9naW5EYXRhKSB7XG5cdFx0bGV0IF9ib2R5ID0gSlNPTi5zdHJpbmdpZnkobG9naW5EYXRhKSxcblx0XHRcdF9oZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KSxcblx0XHRcdF9vcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogX2hlYWRlcnMgfSk7XG5cblx0XHRyZXR1cm4gdGhpcy5faHR0cFxuXHRcdFx0XHQucG9zdCgnL2FwaS9sb2dpbicsIF9ib2R5LCBfb3B0aW9ucylcblx0XHRcdFx0Lm1hcChyZXMgPT4ge1xuXHRcdFx0XHRcdHJlcztcblx0XHRcdFx0fSk7XG5cdH07XG5cblx0bG9nb3V0KCkge1xuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG5cdFx0XHR0aGlzLl9odHRwXG5cdFx0XHRcdC5kZWxldGUoJy9hcGkvbG9naW4nKVxuXHRcdFx0XHQubWFwKHJlcyA9PiByZXMpXG5cdFx0XHRcdC5zdWJzY3JpYmUocmVzID0+IHtcblx0XHRcdFx0XHR0aGlzLl91c2VyU2VydmljZS5pbml0KCk7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh0cnVlKTtcblx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0XG59XG5cblxuXG5cbi8vIChmdW5jdGlvbigpe1xuLy8gXHQndXNlIHN0cmljdCdcbi8vXG4vLyBcdGFuZ3VsYXIubW9kdWxlKCd0aGVHYW1lJylcbi8vIFx0XHQuZmFjdG9yeSgnTG9naW5TZXJ2aWNlJywgW1xuLy8gXHRcdFx0JyRxJyxcbi8vIFx0XHRcdCckaHR0cCcsXG4vLyBcdFx0XHQnTG9naW5SZXNvdXJjZScsXG4vLyBcdFx0XHQnVXNlclNlcnZpY2UnLFxuLy8gXHRcdFx0bG9naW5SZXNvdXJjZVxuLy8gXHRcdF0pO1xuLy9cbi8vIFx0ZnVuY3Rpb24gbG9naW5SZXNvdXJjZSgkcSwgJGh0dHAsIExvZ2luUmVzb3VyY2UsIFVzZXJTZXJ2aWNlKSB7XG4vL1x0XG4vLyBcdFx0cmV0dXJuIHtcbi8vIFx0XHRcdGxvZ2luOiBmdW5jdGlvbih1c2VySW5mbykge1xuLy8gXHRcdFx0XHR2YXIgcCA9ICRxLmRlZmVyKCk7XG4vLyBcdFx0XHRcdExvZ2luUmVzb3VyY2UubG9naW4odXNlckluZm8pLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVwKSB7XG4vLyBcdFx0XHRcdFx0VXNlclNlcnZpY2UuaW5pdCgpO1xuLy8gXHRcdFx0XHRcdHAucmVzb2x2ZShyZXAuZGF0YSk7XG4vLyBcdFx0XHRcdH0sIGZ1bmN0aW9uKGVycikge1xuLy8gXHRcdFx0XHRcdHAucmVqZWN0KGVyci5kYXRhKTtcbi8vIFx0XHRcdFx0fSlcbi8vIFx0XHRcdFx0cmV0dXJuIHAucHJvbWlzZTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRsb2dvdXQ6IGZ1bmN0aW9uKCkge1xuLy8gXHRcdFx0XHR2YXIgcCA9ICRxLmRlZmVyKCk7XG4vLyBcdFx0XHRcdExvZ2luUmVzb3VyY2UubG9nb3V0KCkuJHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyBcdFx0XHRcdFx0VXNlclNlcnZpY2UuaW5pdCgpXG4vLyAgIFx0XHRcdFx0XHRwLnJlc29sdmUodHJ1ZSk7XG4vLyBcdFx0XHRcdH0pXG4vLyBcdFx0XHRcdHJldHVybiBwLnByb21pc2U7XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0bW90RGVQYXNzZU91YmxpOiBmdW5jdGlvbihlbWFpbCkge1xuLy8gXHRcdFx0XHR2YXIgcCA9ICRxLmRlZmVyKCk7XG4vLyBcdFx0XHRcdCRodHRwLmdldCgnYXBpL2ZvcmdvdC9lbWFpbC8nICsgZW1haWwpLnRoZW4oZnVuY3Rpb24ocmVwKSB7XG4vLyBcdFx0XHRcdFx0cC5yZXNvbHZlKHJlcC5kYXRhKTtcbi8vIFx0XHRcdFx0fSwgZnVuY3Rpb24oZXJyKSB7XG4vLyBcdFx0XHRcdFx0cC5yZWplY3QoZXJyLmRhdGEpO1xuLy8gXHRcdFx0XHR9KVxuLy8gXHRcdFx0XHRyZXR1cm4gcC5wcm9taXNlO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdGNoYW5nZVBhc3N3b3JkOiBmdW5jdGlvbih1c2VySW5mbykge1xuLy8gXHRcdFx0XHR2YXIgcCA9ICRxLmRlZmVyKCk7XG4vLyBcdFx0XHRcdCRodHRwLnBvc3QoJ2FwaS9mb3Jnb3QvJywgdXNlckluZm8pLnRoZW4oZnVuY3Rpb24ocmVwKSB7XG4vLyBcdFx0XHRcdFx0cC5yZXNvbHZlKHJlcC5kYXRhKTtcbi8vIFx0XHRcdFx0fSwgZnVuY3Rpb24oZXJyKSB7XG4vLyBcdFx0XHRcdFx0cC5yZWplY3QoZXJyLmRhdGEpO1xuLy8gXHRcdFx0XHR9KVxuLy8gXHRcdFx0XHRyZXR1cm4gcC5wcm9taXNlO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH0gIFxuLy8gICBcdH1cbi8vIH0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
