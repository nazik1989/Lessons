'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl'
  });
}])

.controller('CarsCtrl', ['$scope','$http',function($scope,$http) {



    $http.get("http://localhost:8081/api/car_list")
        .then(function(response) {
            $scope.todos = response.data;


        });
}]);