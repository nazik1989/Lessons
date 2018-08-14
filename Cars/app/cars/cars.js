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
            $scope.array = response.data;


            $scope.filteredTodos = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 5
                ,$scope.maxSize = 5;


            $scope.makeTodos = function() {
                $scope.todos = [];

                for (var i=0;i<$scope.array.length;i++) {
                    $scope.todos.push({ make:$scope.array[i].make,price:$scope.array[i].price,image:$scope.array[i].image,model:$scope.array[i].model, stars:$scope.array[i].stars,year:$scope.array[i].year,transmission:$scope.array[i].transmission,useWay:$scope.array[i].useWay,iconuseWay:$scope.array[i].iconuseWay, description:$scope.array[i].description,condition:$scope.array[i].condition,body:$scope.array[i].body});
                }
            };
            $scope.makeTodos();

            $scope.GetValues = function(make,price,model,image,year,transmission) {

                $scope.myDatas=('<b>'+"Make is  "+'</b>'+make+'<br>'+
                    '<b>'+"Price is  $"+'</b>'+price+'<br>'+
                    '<b>'+"Model  is "+'</b>'+model+'<br>'+
                    '<b>'+"Transmission  is "+'</b>'+transmission+'<br>'+
                    '<b>'+"Year is  "+'</b>'+year+'<br>');
                document.write($scope.myDatas);

                //sessionStorage["myData"] = angular.copy($scope.myDatas);

                //window.open("test.html")
                //console.log();
            };


            $scope.divAvto = {"padding":"10px"};
            $scope.myimageStars = {"width" : "70px",
                "height" : "13px"};

            $scope.myimageIcone = {   "width" : "20px",
                "height" : "20px"};

            $scope.myimage = {
                "width" : "350px",
                "height" : "200px"
            };


            $scope.Pagination =  {
                "position": "fixed",
                "left": 0,
                "bottom": 0,
                "width": "100%",
                "text-align": "center"
            };


            $scope.numPages = function () {
                return Math.ceil($scope.todos.length / $scope.numPerPage);
            };

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.filteredTodos = $scope.todos.slice(begin, end);
            });
        });



}]);