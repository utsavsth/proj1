'use strict';

app.controller('HeaderCtrl', ['$rootScope', '$scope', '$window', 'Model', 'UserService', 'AuthenticationService',
    function ($rootScope, $scope, $window, Model, UserService, AuthenticationService){
        $scope.logout = logout;
        function logout(){
            AuthenticationService.ClearCredentials();
            $window.location.href = $window.location.href + 'login';
        }
}]);