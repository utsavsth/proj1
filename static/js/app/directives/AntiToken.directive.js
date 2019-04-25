(function (){
    'use strict';
    var app = angular.module('app');
    app.directive("antiToken", function (){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                token: "="
            },
            template: "<input type='hidden' name='{{token.name}}' value='{{token.value}}'>"
        };
    });
})();
