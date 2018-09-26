'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'user/user.html',
    controller: 'UserCtrl'
  });

}])

    .controller('UserCtrl', ['$scope','$http','service',function($scope,$http, service) {
       // $scope.selectedCar=''
        service.func("http://localhost:8081/api/user_list")
            .then(res=>{

             $scope.users = res.data;
             //console.log($scope.users);
});
        $scope.deleteUser=function(id){
            var userId = {id:id}
            $http.post('http://127.0.0.1:8081/delete_user', userId) .then(function(res) {
                //$scope.oneUser = res.data;
                // console.log("nnn"+res.data);
            });
           // -------------- Timeout function for update my page  ----------------------//
            function timeoutFunction() {
                setTimeout(function(){location.reload(); }, 200);}
            timeoutFunction();
        };

}]);