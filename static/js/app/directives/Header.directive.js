(function (){
    'use strict';
    var app = angular.module('app');
    app.directive("myHeader", function (AuthenticationService){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                go: "&"
            },
            template: "<header><h3>Logo</h3><p ng-if='isShown'><a href='' class='btn btn-primary' ng-click='go()'>Logout</a></p></header>",
            link: linkFunc
        };
        function linkFunc(scope, elem, attrs){
            scope.isShown = AuthenticationService.IsLoggedIn();
        }
    });
})();

//reference: https://stackoverflow.com/questions/42674317/how-to-handle-ng-click-inside-directive-angular-js