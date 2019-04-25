'use strict';

app.controller('HomeCtrl', ['$rootScope', '$scope', '$window', 'Model', 'UserService', 'AuthenticationService',
    function ($rootScope, $scope, $window, Model, UserService, AuthenticationService){
        $scope.user = {};
        $scope.allUsers = [];
        $scope.model = Model;
        //mixpanel.track("Home Page Loaded!", { pageName: $window.href, pageUrl: $window.href});

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            // UserService.GetByUsername($rootScope.globals.currentUser.username)
            //     .then(function (user) {
            //         $scope.user = user.data;
            //     });
            UserService.GetByUserId(1)
                .then(function (response){
                    $scope.user = response.data;
                })
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (response) {
                    $scope.allUsers = response.data;
                });
        }

        function deleteUser(id){
            UserService.Delete(id)
                .then(function (){
                    loadAllUsers();
                })
        }
    }
]);