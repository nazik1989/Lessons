'use strict';
angular.module('myApp.admin', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])

    .controller('AdminCtrl', ['$scope','$http','service','$location',function($scope,$http,service,$location) {
            $scope.customer = {};
            // $scope.customer.name = 'Insert name';
            // $scope.customer.lastname = 'Insert lastname';
            // $scope.customer.email = 'Example john.doe@gmail.com';

        $scope.Create = function(){
            var uploadUrl = "http://127.0.0.1:8081/create_user";
            service.post(uploadUrl, $scope.customer) .then(res=>{

                $scope.errors = res.data;
               console.log($scope.errors);
            });

            // // -------------- Timeout function for update my page  ----------------------//
            // function timeoutFunction() {
            //     setTimeout(function(){location.reload(); }, 200);}
            // timeoutFunction();
        };

        var PageUrl = $location.url();
        var userId = PageUrl.slice(7);
        $scope.customer.hinId = userId;
            $scope.Edite = function(){
             var uploadUrl = "http://127.0.0.1:8081/update_user";
             service.post(uploadUrl, $scope.customer);
           // console.log("userId"+userId);
           //console.log("request"+ $scope.customer);

                // -------------- Timeout function for update my page  ----------------------//
                function timeoutFunction() {
                    setTimeout(function(){location.reload(); }, 200);}
                timeoutFunction();
        };


 }]);

