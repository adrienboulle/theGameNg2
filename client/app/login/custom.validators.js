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
            }
            CustomValidators.emailUnique = function (control) {
                return Rx_1.Observable.create(observer => {
                    this.signupService
                        .isEmailUnique(control.value)
                        .map(res => res.json().exists)
                        .subscribe(res => {
                        observer.next(res);
                        observer.complete();
                    });
                });
            };
            exports_1("CustomValidators", CustomValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2N1c3RvbS52YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBU0E7WUFhQyxDQUFDO1lBWFMsNEJBQVcsR0FBRyxVQUFTLE9BQWdCO2dCQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRO29CQUM3QixJQUFJLENBQUMsYUFBYTt5QkFDYixhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzt5QkFDNUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO3lCQUM3QixTQUFTLENBQUMsR0FBRzt3QkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQyxDQUFDO1lBRVgsQ0FBQyxDQUFBO1lBYkQsK0NBYUMsQ0FBQSIsImZpbGUiOiJsb2dpbi9jdXN0b20udmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtTaWdudXBTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc2lnbnVwLnNlcnZpY2VcIjtcblxuaW50ZXJmYWNlIEVtYWlsVmFsaWRhdG9yIHtcbiAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmFsaWRhdG9ycyB7XG5cbiAgICBzdGF0aWMgZW1haWxVbmlxdWUgPSBmdW5jdGlvbihjb250cm9sOiBDb250cm9sKTogRW1haWxWYWxpZGF0b3Ige1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaWdudXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmlzRW1haWxVbmlxdWUoY29udHJvbC52YWx1ZSlcbiAgICAgICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpLmV4aXN0cylcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
