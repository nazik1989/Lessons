'use strict';

angular.module('myApp.carOnclick', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/carOnclick', {
            templateUrl: 'carOnclick/carOnclick.html',
            controller: 'CarOnclickCtrl'
        });
    }])

    .controller('CarsCtrl', ['$scope','$http',function($scope,$http) {



        $http.get("http://localhost:8081/carOnclick")
            .then(function(response) {
                $scope.todos = response.data;});
        console.log($scope.todos);
}]);

