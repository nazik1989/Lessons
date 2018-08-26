'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])

    .controller('AdminCtrl', ['$scope','$http',function($scope,$http) {

        $http.get("http://localhost:8081/api/car_list")
            .then(function(response) {
                $scope.cars = response.data;;
            });
/*
                    $scope.create = function() {
                    console.log($scope.car);
                    $http.post('http://localhost:8081/create',$scope.car).
                    then(function(response) {
                        console.log("posted successfully");
                    }).catch(function(response) {
                        console.error("error in posting");
                    })
                  }
*/

    }]);
