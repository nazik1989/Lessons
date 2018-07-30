var todos = angular.module('todos', ['ui.bootstrap']);

todos.controller('TodoController', function($scope,$http) {



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

});



