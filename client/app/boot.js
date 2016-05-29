System.register(['angular2/platform/browser', "./app.component", "angular2/router", "./services/user.service", "angular2/http", "./services/login.service", "./services/signup.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, user_service_1, http_1, login_service_1, signup_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (signup_service_1_1) {
                signup_service_1 = signup_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, user_service_1.UserService, login_service_1.LoginService, signup_service_1.SignupService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQixFQUFFLHFCQUFjLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxFQUFFLDhCQUFhLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtTaWdudXBTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWdudXAuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUk9VVEVSX1BST1ZJREVSUywgSFRUUF9QUk9WSURFUlMsIFVzZXJTZXJ2aWNlLCBMb2dpblNlcnZpY2UsIFNpZ251cFNlcnZpY2VdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
