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
            $scope.FiltredArray = [];
            $scope.FiltredArray.push($scope.todos[0]);
            $scope.FiltredArray.push($scope.todos[1]);
            $scope.FiltredArray.push($scope.todos[2]);
            $scope.FiltredArray.push($scope.todos[3]);
            $scope.FiltredArray.push($scope.todos[4]);

            $scope.PaginationFunction = function(event){
                $scope.turId = event.target.id;
                $scope.keyTodos= ($scope.turId-1)*5;
                $scope.FiltredArray.splice(0,5);
                $scope.FiltredArray.push($scope.todos[$scope.keyTodos]);
                $scope.FiltredArray.push($scope.todos[$scope.keyTodos+1]);
                $scope.FiltredArray.push($scope.todos[$scope.keyTodos+2]);
                $scope.FiltredArray.push($scope.todos[$scope.keyTodos+3]);
                $scope.FiltredArray.push($scope.todos[$scope.keyTodos+4]);};


     });
}]);