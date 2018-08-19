'use strict';

angular.module('myApp.carOnclick', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/carOnclick', {
            templateUrl: 'carOnclick/carOnclick.html',
            controller: 'CarOnclickCtrl'
        });
    }])

    .controller('CarOnclickCtrl', ['$scope','$http',function($scope,$http) {



        $http.get("http://localhost:8081/api/car_list")
            .then(function(response) {
                $scope.todos = response.data;});




/* $scope.filterValues = [1,8];
        $scope.myFilter = function(value) {
        return ($scope.filterValues.indexOf(value.id) !== -1);
        };

        in carOnclickHtml
        <div ng-repeat="user in users |  filter: myFilter">
    */
}]);
