(function (){
    'use strict';
    
    var app = angular.module('app');
    app.directive("focusIf", function ($timeout){
        return {
            restrict: 'A',
            scope: {
                focusIf: '=',
            },
            link: function (scope, elem, attrs){
                if(scope.focusIf){
                    $timeout(function (){
                        elem.focus();
                    }, 100);
                }
            }
        };
    });
})();
