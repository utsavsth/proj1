var app = (function (){
    'use strict';
    var app = angular.module("app", [
        'ngRoute', 
        'ngCookies',
        //'angular-loading-bar'
        'cfp.loadingBarInterceptor'
    ]);

    return app;
})();