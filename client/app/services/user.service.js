System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', 'rxjs/add/operator/share', 'rxjs/observable/of', "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            let UserService = class UserService {
                constructor(_http) {
                    this._http = _http;
                    this.rsInRs = function (rsCands, rss) {
                        for (var i = 0; i < rsCands.length; i++) {
                            for (var j = 0; j < rss.length; j++) {
                                if (rss[j]._id === rsCands[i]._id) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };
                }
                init() {
                    this.userData = undefined;
                    this.observable = undefined;
                }
                user(force) {
                    if (force !== true && this.userData) {
                        return Rx_1.Observable.of(this.userData);
                    }
                    else if (force !== true && this.observable) {
                        return this.observable;
                    }
                    else {
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
                }
                ;
                bestRoles() {
                    var _bestRoles;
                    return Rx_1.Observable.create(observer => {
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
                            }
                            else {
                                observer.next([]);
                                observer.complete();
                            }
                        });
                    });
                }
                ;
                hasLevel(lvl) {
                    return Rx_1.Observable.create(observer => {
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
                }
                ;
                hasRole(roles) {
                    return Rx_1.Observable.create(observer => {
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
                }
                ;
                isAuthenticated(force) {
                    return Rx_1.Observable.create(observer => {
                        this.user(force)
                            .subscribe(user => {
                            if (user.isAuthenticated === true) {
                                observer.next(true);
                                observer.complete();
                            }
                            else {
                                observer.next(false);
                                observer.complete();
                            }
                        });
                    });
                }
                ;
                isAuthenticatedSync() {
                    return (this.userData) ? this.userData.isAuthenticated : false;
                }
            };
            UserService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], UserService);
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUtDLFlBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFnRnZCLFdBQU0sR0FBRyxVQUFVLE9BQU8sRUFBRSxHQUFHO3dCQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0NBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2IsQ0FBQzs0QkFDRixDQUFDO3dCQUNGLENBQUM7d0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZCxDQUFDLENBQUE7Z0JBekZpQyxDQUFDO2dCQUVuQyxJQUFJO29CQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO29CQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxJQUFJLENBQUMsS0FBTTtvQkFDVixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxNQUFNLENBQUMsZUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JDLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUss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Z0JBQ2hFLENBQUM7WUFFRixDQUFDO1lBcEhEO2dCQUFDLGlCQUFVLEVBQUU7OzJCQUFBO1lBQ2IscUNBbUhDLENBQUEiLCJmaWxlIjoic2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtVc2VyRGF0YX0gZnJvbSBcIi4vdXNlckRhdGFcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmUnO1xuaW1wb3J0ICdyeGpzL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG5cdHByaXZhdGUgdXNlckRhdGE6IFVzZXJEYXRhO1xuXHRwcml2YXRlIG9ic2VydmFibGU6IE9ic2VydmFibGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuXHRpbml0KCkge1xuXHRcdHRoaXMudXNlckRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5vYnNlcnZhYmxlID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0dXNlcihmb3JjZT8pIHtcblx0XHRpZiAoZm9yY2UgIT09IHRydWUgJiYgdGhpcy51c2VyRGF0YSkge1xuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUub2YodGhpcy51c2VyRGF0YSk7XG5cdFx0fSBlbHNlIGlmIChmb3JjZSAhPT0gdHJ1ZSAmJiB0aGlzLm9ic2VydmFibGUpIHtcblx0XHRcdHJldHVybiB0aGlzLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub2JzZXJ2YWJsZSA9IHRoaXMuX2h0dHBcblx0XHRcdFx0LmdldCgnL2FwaS9sb2dpbicpXG5cdFx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHRoaXMub2JzZXJ2YWJsZSA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy51c2VyRGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy51c2VyRGF0YTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LnNoYXJlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5vYnNlcnZhYmxlO1xuXHRcdH1cblx0fTtcblxuXHRiZXN0Um9sZXMoKSB7XG5cblx0XHR2YXIgX2Jlc3RSb2xlczogc3RyaW5nW107XG5cblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuXHRcdFx0dGhpcy51c2VyKClcblx0XHRcdFx0LnN1YnNjcmliZSh1c2VyID0+IHtcblx0XHRcdFx0XHRpZiAodXNlci5pc0F1dGhlbnRpY2F0ZWQgPT09IHRydWUgJiYgdXNlci5yb2xlcykge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB1c2VyLnJvbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh1c2VyLnJvbGVzW2ldLmxldmVsID09PSB1c2VyLmxldmVsKSB7XG5cdFx0XHRcdFx0XHRcdFx0X2Jlc3RSb2xlcy5wdXNoKHVzZXIucm9sZXNbaV0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KF9iZXN0Um9sZXMpO1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dChbXSk7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0aGFzTGV2ZWwobHZsKSB7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcblx0XHRcdHRoaXMudXNlcigpXG5cdFx0XHRcdC5zdWJzY3JpYmUodXNlciA9PiB7XG5cdFx0XHRcdFx0aWYgKHVzZXIuaXNBdXRoZW50aWNhdGVkID09PSB0cnVlICYmIHVzZXIubGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0aWYgKHVzZXIubGV2ZWwgPD0gbHZsKSB7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLm5leHQodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQoZmFsc2UpO1xuXHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGhhc1JvbGUocm9sZXMpIHtcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuXHRcdFx0dGhpcy51c2VyKClcblx0XHRcdFx0LnN1YnNjcmliZSh1c2VyID0+IHtcblx0XHRcdFx0XHRpZiAodXNlci5pc0F1dGhlbnRpY2F0ZWQgPT09IHRydWUgJiYgdXNlci5yb2xlcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5yc0luUnModXNlci5yb2xlcywgcm9sZXMpKSB7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLm5leHQodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQoZmFsc2UpO1xuXHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgcnNJblJzID0gZnVuY3Rpb24gKHJzQ2FuZHMsIHJzcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNDYW5kcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCByc3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKHJzc1tqXS5faWQgPT09IHJzQ2FuZHNbaV0uX2lkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNBdXRoZW50aWNhdGVkKGZvcmNlPykge1xuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG5cdFx0XHR0aGlzLnVzZXIoZm9yY2UpXG5cdFx0XHRcdC5zdWJzY3JpYmUodXNlciA9PiB7XG5cdFx0XHRcdFx0aWYgKHVzZXIuaXNBdXRoZW50aWNhdGVkID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHRydWUpO1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dChmYWxzZSk7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0aXNBdXRoZW50aWNhdGVkU3luYygpIHtcblx0XHRyZXR1cm4gKHRoaXMudXNlckRhdGEpID8gdGhpcy51c2VyRGF0YS5pc0F1dGhlbnRpY2F0ZWQgOiBmYWxzZTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
