import {Directive, ElementRef, Input} from "angular2/core";
import {UserService} from "../../services/user.service";
import {Subscription} from "rxjs/Subscription";


@Directive({
    selector: '[hasAnyRole]'
})
export class HasAnyRoleDirective {

    constructor(private el: ElementRef, private userService: UserService) {}

    subscription: Subscription;

    ngOnInit() {
        this.subscription = this.userService.userChanged$.subscribe(data => {
            this.userService
                .hasRole(this.hasAnyRole)
                .subscribe(has => {
                    if (has) {
                        this.el.nativeElement.classList.remove('hidden');
                    } else {
                        this.el.nativeElement.classList.add('hidden');
                    }
                });
        });
    }

    @Input() hasAnyRole: string[];

}