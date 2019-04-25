(function (){
    'use strict';
    var model = { 
        'additionalLinks': [
            { 'href': '/admin/forgot', 'text': 'Forgot Password', 'type': 'forgotpassword'}
        ], 
        'allowRememberMe': true, 
        'antiForgery': {'name': 'dell', 'value': 'ruotdslgjdairej'},
        'loginUrl': '/admin/login', 
        'rememberMe': false            
    };

    angular.module('app').constant("Model", model);
})();
