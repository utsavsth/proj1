'use strict';

app.controller('LayoutCtrl', ['$scope', '$window', 'Model', 
    function ($scope, $window, Model){
        //debugger
        $scope.model = Model;
        mixpanel.track("Login Loaded!", { pageName: $window.href, pageUrl: $window.href});
    }
]);