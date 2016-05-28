import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	constructor(private _http: Http) {}
	
	login(loginData) {
		let _body = JSON.stringify(loginData),
			_headers = new Headers({'Content-Type': 'application/json'}),
			_options = new RequestOptions({ headers: _headers });

		return this._http
				.post('/api/login', _body, _options)
				.map(res => {
					res;
				});
	};

	logout() {
		return this._http
			.delete('/api/login')
			.map(res => res);
	};
	
}




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