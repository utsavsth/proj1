(function (){
    'use strict';
    var model = {
        'apiBaseUrl': 'http://172.27.168.33:8082/api/',
        'appBaseUrl': 'http://localhost:8080/#/'
    };

    angular.module('app').constant('appConstant', model);
})();