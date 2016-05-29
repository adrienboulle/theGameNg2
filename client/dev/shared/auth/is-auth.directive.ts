import {Directive, ElementRef, Input} from "angular2/core";
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs/Subscription";


@Directive({
    selector: '[isAuth]'
})
export class IsAuthDirective {

    constructor(private el: ElementRef, private userService: UserService) {}

    subscription: Subscription;

    ngOnInit() {
        this.subscription = this.userService.userChanged$.subscribe(data => {
            if (data.isAuthenticated !== this.isAuth) {
                this.el.nativeElement.classList.add('hidden');
            } else {
                this.el.nativeElement.classList.remove('hidden');
            }
        });
    }

    @Input() isAuth: boolean;

}