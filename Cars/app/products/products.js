'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope','$http',function($scope,$http) {



    $http.get("products/products.json")
        .then(function(response) {
            $scope.array = response.data;


            $scope.filteredTodos = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 5
                ,$scope.maxSize = 5;


            $scope.makeTodos = function() {
                $scope.todos = [];

                for (var i=0;i<$scope.array.length;i++) {
                    $scope.todos.push({ id:$scope.array[i]._id,name:$scope.array[i].name,price:$scope.array[i].price,image:$scope.array[i].image,monthly_price:$scope.array[i].monthly_price, type:$scope.array[i].type, color:$scope.array[i].color});
                }
            };
            $scope.makeTodos();

            $scope.GetValues = function(name,price,montly_price,image,type,color) {

                $scope.myDatas=('<b>'+"Name is  "+'</b>'+name+'<br>'+
                    '<b>'+"Price is  $"+'</b>'+price+'<br>'+
                    '<b>'+"Montly price is  $"+'</b>'+montly_price+'<br>'+
                    '<b>'+"Type is  "+'</b>'+type+'<br>'+
                    '<b>'+"Color is  "+'</b>'+color);
                document.write($scope.myDatas);

                //sessionStorage["myData"] = angular.copy($scope.myDatas);

                //window.open("test.html")
                //console.log();
            };


            $scope.myimage = {
                "width" : "300px",
                "height" : "300px"
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