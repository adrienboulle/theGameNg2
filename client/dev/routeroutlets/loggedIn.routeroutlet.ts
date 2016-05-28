import {RouterOutlet, Router, ComponentInstruction} from "angular2/router";
import {Directive, DynamicComponentLoader, Attribute, ViewContainerRef} from "angular2/core";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";

@Directive({
    selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: Array;

    constructor(
        _elementRef: ViewContainerRef, _loader: DynamicComponentLoader,
        private _parentRouter: Router, @Attribute('name') nameAttr: string,
        private _userService: UserService) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

    }

    activate(instruction: ComponentInstruction) {
        this._canActivate(instruction.urlPath)
            .subscribe(can => {
                if (can === true) {
                    return super.activate(instruction);
                }
            });
    }

    _canActivate(url) {
        return Observable.create(observer => {
            this._userService
                .isAuthenticated(true)
                .subscribe(isLoogedIn => {
                    if (isLoogedIn) {
                        if (url === "login") {
                            this._parentRouter.navigate(['Accueil']);
                            observer.next(false);
                            observer.complete();
                        } else {
                            observer.next(true);
                            observer.complete();
                        }
                    } else {
                        if (url === "accueil") {
                            this._parentRouter.navigate(['Login']);
                            observer.next(false);
                            observer.complete();
                        } else {
                            observer.next(true);
                            observer.complete();
                        }
                    }
                });
        });
    }
}