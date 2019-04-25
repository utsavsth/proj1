(function (){
    'use strict';

    var app = angular.module('app');
    app.factory('UserService', UserService);

    UserService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'appConstant'];

    function UserService($http, $cookies, $rootScope, $timeout, appConstant){
        var service = {};

        service.GetByUsername = GetByUsername;
        service.GetByUserId = GetByUserId;
        service.GetAll = GetAll;
        service.Delete = Delete;

        return service;

        function GetByUsername(username){
            var targetUrl = appConstant.apiBaseUrl + 'users/' + username;
            return $http({
                method: 'GET',
                url: targetUrl
            });
        }
        function GetByUserId(id){
            var targetUrl = appConstant.apiBaseUrl + 'users/' + id;
            return $http({
                method: 'GET',
                url: targetUrl
            });
        }

        function GetAll(){
            var targetUrl = appConstant.apiBaseUrl + 'users'
            return $http({
                method: 'GET',
                url: targetUrl
            });
        }

        function Delete(id){
            var target = appConstant.apiBaseUrl + 'users'
            return $http({
                method: 'DELETE',
                url: targetUrl
            });
        }
    }
})();