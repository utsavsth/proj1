(function (){
    'use strict';
    angular.module('app')
        .config(loaderConfig)
        .config(appRoute)
        .config(appInterceptor);
    
    loaderConfig.$inject = [
        'cfpLoadingBarProvider'
    ];
    appRoute.$inject = [
        '$routeProvider'
    ];
    appInterceptor.$inject = [
        '$provide',
        '$httpProvider'
    ];

    function loaderConfig(cfpLoadingBarProvider){
        cfpLoadingBarProvider.includeSpinner = false;
    }

    function appRoute($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl: '../templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: '../templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/makePdf', {
                templateUrl: '../templates/pdfmake.html',
                controller: 'PlaygroundCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    };

    function appInterceptor($provide, $httpProvider){
        $httpProvider.interceptors.push(['$q', function ($q){
            function slowpoke(response){
                var deferred = $q.defer();

                setTimeout(function (){
                    deferred.resolve(response);
                }, 100);
                
                return deferred.promise;
            }

            return {
                'request': function (config){
                    config.headers = config.headers || {};

                    return config;
                },
                'response': function (response){
                    var deferred = $q.defer();
                    deferred.resolve(response);
                    return slowpoke(response);
                }
            };
        }])
    };
})();