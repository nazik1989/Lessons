'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl','$scope' [function($scope) {
    $scope.inContainer = {
        "background-color" : "#1abc9c",
        "width" : "700px",
        "height" : "120px",
        "border": "4px solid white",
        "border-radius": "70px 20px"
    };

    $scope.h1= {
        "color" : "white",
        "font-size" : "50px",
        "text-align": "center",

    };

    $scope.container = {
        "padding" : "20px",

    };
    $scope.ArmWeb = "ArmWeb";


}]);