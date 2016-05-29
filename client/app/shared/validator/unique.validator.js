System.register(["rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var CustomValidators;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            class CustomValidators {
                static unique(control) {
                    return Observable_1.Observable.create(observer => {
                        if (!control.value) {
                            observer.next({ unique: false });
                            observer.complete();
                        }
                        else {
                            http
                                .get(url + control.value)
                                .map(res => { return res.json().exists; })
                                .subscribe(res => {
                                if (res) {
                                    observer.next(null);
                                    observer.complete();
                                }
                                else {
                                    observer.next({ unique: res });
                                    observer.complete();
                                }
                            });
                        }
                    });
                }
                ;
            }
            exports_1("CustomValidators", CustomValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92YWxpZGF0b3IvdW5pcXVlLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUlBO2dCQUVJLE9BQU8sTUFBTSxDQUFDLE9BQWdCO29CQUMxQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDOzRCQUMvQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osSUFBSTtpQ0FDQyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUNBQ3hCLEdBQUcsQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUEsQ0FBQSxDQUFDLENBQUM7aUNBQ3RDLFNBQVMsQ0FBQyxHQUFHO2dDQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dDQUN4QixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztvQ0FDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dDQUN4QixDQUFDOzRCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNYLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQzs7WUFFTCxDQUFDO1lBeEJELCtDQXdCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92YWxpZGF0b3IvdW5pcXVlLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbH0gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21WYWxpZGF0b3JzIHtcblxuICAgIHN0YXRpYyB1bmlxdWUoY29udHJvbDogQ29udHJvbCk6IE9ic2VydmFibGU8e1trZXk6IHN0cmluZ106IGJvb2xlYW59PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHt1bmlxdWU6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaHR0cFxuICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybCArIGNvbnRyb2wudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHtyZXR1cm4gcmVzLmpzb24oKS5leGlzdHN9KVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHt1bmlxdWU6IHJlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
