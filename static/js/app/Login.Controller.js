'use strict';

app.controller('LoginCtrl', ['$scope', '$window', '$location', 'Model', 'AuthenticationService',
    function ($scope, $window, $location, Model, AuthenticationService){
        //debugger
        $scope.dataLoading = false;
        $scope.model = Model;
        //mixpanel.track("Login Loaded!", { pageName: $window.href, pageUrl: $window.href});

        $scope.login = function() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.model.username, $scope.model.password, function(response){
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.model.username, $scope.model.password, response.token);
                    $location.path('/');
                } else {
                    $scope.dataLoading = false;
                }
            });
        };
    }
]);