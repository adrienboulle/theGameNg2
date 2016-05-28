import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {UserData} from "./userData";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/observable/of';
import {Observable} from "rxjs/Rx";

@Injectable()
export class UserService {

	private userData: UserData;
	private observable: Observable;

	constructor(private _http: Http) {}

	init() {
		this.userData = undefined;
		this.observable = undefined;
	}

	user(force?) {
		if (force !== true && this.userData) {
			return Observable.of(this.userData);
		} else if (force !== true && this.observable) {
			return this.observable;
		} else {
			this.observable = this._http
				.get('/api/login')
				.map(response => {
					this.observable = null;
					this.userData = response.json();
					return this.userData;
				})
				.share();
			return this.observable;
		}
	};

	bestRoles() {

		var _bestRoles: string[];

		return Observable.create(observer => {
			this.user()
				.subscribe(user => {
					if (user.isAuthenticated === true && user.roles) {
						for (var i = 0; i < user.roles.length; i++) {
							if (user.roles[i].level === user.level) {
								_bestRoles.push(user.roles[i]);
							}
						}
						observer.next(_bestRoles);
						observer.complete();
					} else {
						observer.next([]);
						observer.complete();
					}
				});
		});
	};

	hasLevel(lvl) {
		return Observable.create(observer => {
			this.user()
				.subscribe(user => {
					if (user.isAuthenticated === true && user.level !== undefined) {
						if (user.level <= lvl) {
							observer.next(true);
							observer.complete();
						}
					}
					observer.next(false);
					observer.complete();
				});
		});
	};

	hasRole(roles) {
		return Observable.create(observer => {
			this.user()
				.subscribe(user => {
					if (user.isAuthenticated === true && user.roles !== undefined) {
						if (this.rsInRs(user.roles, roles)) {
							observer.next(true);
							observer.complete();
						}
					}
					observer.next(false);
					observer.complete();
				});
		});
	};

	private rsInRs = function (rsCands, rss) {
		for (var i = 0; i < rsCands.length; i++) {
			for (var j = 0; j < rss.length; j++) {
				if (rss[j]._id === rsCands[i]._id) {
					return true;
				}
			}
		}
		return false;
	}

	isAuthenticated(force?) {
		return Observable.create(observer => {
			this.user(force)
				.subscribe(user => {
					if (user.isAuthenticated === true) {
						observer.next(true);
						observer.complete();
					} else {
						observer.next(false);
						observer.complete();
					}
				});
		});
	};

	isAuthenticatedSync() {
		return (this.userData) ? this.userData.isAuthenticated : false;
	}

}