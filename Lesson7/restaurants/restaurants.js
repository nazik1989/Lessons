var todos = angular.module('todos', ['ui.bootstrap']);

todos.controller('TodoController', function($scope,$http) {


    $http.get("restaurants.json")
        .then(function(response) {
            $scope.array = response.data;

            $scope.filteredTodos = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 4
                ,$scope.maxSize = 5;


            $scope.makeTodos = function() {
                $scope.todos = [];

                for (i=0;i<$scope.array.length;i++) {
                    $scope.todos.push({ URL:$scope.array[i].URL,name:$scope.array[i].name,address:$scope.array[i].address,image:$scope.array[i].image,rating:$scope.array[i].rating, type_of_food:$scope.array[i].type_of_food, outcode:$scope.array[i].outcode,postcode:$scope.array[i].postcode});
                }
            };
            $scope.makeTodos();

            $scope.GetValues = function(URL,name,address,rating,type_of_food,outcode,postcode) {

                $scope.myDatas=('<b>'+"URL is  "+'</b>'+URL+'<br>'+
                    '<b>'+"Name is  "+'</b>'+name+'<br>'+
                    '<b>'+"Address is  "+'</b>'+address+'<br>'+
                    '<b>'+"Rating is  "+'</b>'+rating+" stars"+'<br>'+
                    '<b>'+"Type of food  "+'</b>'+type_of_food+'<br>'+
                    '<b>'+"Outcode is  "+'</b>'+outcode+'<br>'+
                    '<b>'+"Postcode is  "+'</b>'+postcode+'<br>');
                document.write($scope.myDatas);

                //sessionStorage["myData"] = angular.copy($scope.myDatas);

                //window.open("test.html")
                //console.log();
            };


            $scope.myimage = {
                "width" : "300px",
                "height" : "300px",
                "border": "4px solid #1abc9c",
                "border-radius": "50px 20px"
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
});



