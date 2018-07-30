var todos = angular.module('todos', ['ui.bootstrap']);

todos.controller('TodoController', function($scope,$http) {


    $http.get("componies.json")
        .then(function(response) {
            $scope.array = response.data;

            $scope.filteredTodos = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 6
                ,$scope.maxSize = 5;


            $scope.makeTodos = function() {
                $scope.todos = [];

                for (i=0;i<$scope.array.length;i++) {
                    $scope.todos.push({ name:$scope.array[i].name,permalink:$scope.array[i].permalink,crunchbase_url:$scope.array[i].crunchbase_url, homepage_url:$scope.array[i].homepage_url, image:$scope.array[i].image});
                }
            };
            $scope.makeTodos();

            $scope.GetValues = function(name,permalink,crunchbase_url,homepage_url) {

                $scope.myDatas=('<b>'+"Name is  "+'</b>'+name+'<br>'+
                    '<b>'+"Permalink is  $"+'</b>'+permalink+'<br>'+
                    '<b>'+"Crunchbase url is  $"+'</b>'+crunchbase_url+'<br>'+
                    '<b>'+"Homepage url is  "+'</b>'+homepage_url+'<br>');
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
});



