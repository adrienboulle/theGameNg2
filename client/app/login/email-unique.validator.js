System.register(['rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    var CustomValidators;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            class CustomValidators {
                constructor(signupService) {
                    this.signupService = signupService;
                }
                emailFormat(control) {
                    return Rx_1.Observable.create(observer => {
                        this.signupService
                            .isEmailUnique(control.value)
                            .map(res => res.json().exists)
                            .subscribe(res => {
                            observer.next(res);
                            observer.complete();
                        });
                    });
                }
            }
            exports_1("CustomValidators", CustomValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2VtYWlsLXVuaXF1ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFTQTtnQkFFSSxZQUFvQixhQUE0QjtvQkFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7Z0JBQUcsQ0FBQztnQkFFcEQsV0FBVyxDQUFDLE9BQWdCO29CQUN4QixNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsYUFBYTs2QkFDYixhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs2QkFDNUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDOzZCQUM3QixTQUFTLENBQUMsR0FBRzs0QkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNuQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDO29CQUNYLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFFTCxDQUFDO1lBaEJELCtDQWdCQyxDQUFBIiwiZmlsZSI6ImxvZ2luL2VtYWlsLXVuaXF1ZS52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7U2lnbnVwU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZ251cC5zZXJ2aWNlXCI7XG5cbmludGVyZmFjZSBFbWFpbFZhbGlkYXRvciB7XG4gICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhbGlkYXRvcnMge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWdudXBTZXJ2aWNlOiBTaWdudXBTZXJ2aWNlKSB7fVxuXG4gICAgZW1haWxGb3JtYXQoY29udHJvbDogQ29udHJvbCk6IEVtYWlsVmFsaWRhdG9yIHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwU2VydmljZVxuICAgICAgICAgICAgICAgIC5pc0VtYWlsVW5pcXVlKGNvbnRyb2wudmFsdWUpXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKS5leGlzdHMpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
