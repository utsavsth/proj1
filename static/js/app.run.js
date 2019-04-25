(function (){
    'use strict';
    angular.module('app').run(appRun);

    appRun.$inject = [
        '$rootScope',
        '$http',
        '$location',
        '$cookies'
    ];

    function appRun($rootScope, $http, $location, $cookies){
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.authToken;
        }

        $rootScope.$on('$routeChangeStart', function (event, next, current){
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;

            var loggedIn = $rootScope.globals.currentUser;

            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }

            if(!restrictedPage && loggedIn){
                $location.path('/');
            }
        });
    }
})();