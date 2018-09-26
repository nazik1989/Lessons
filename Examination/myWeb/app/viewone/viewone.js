'use strict';

angular.module('myApp.viewone', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewone', {
            templateUrl: 'viewone/viewone.html',
            controller: 'ViewoneCtrl'
        });
    }])
    .controller('ViewoneCtrl', ['$scope','$http','$location',function($scope,$http,$location) {

                var PageUrl = $location.url();
                var userId = PageUrl.slice(9);
                var data = {"id" : userId};

        $http.post('http://127.0.0.1:8081/one_user_view', data) .then(function(res) {
        $scope.oneUser = res.data;

           // console.log("nnn"+res.data);
        });
}]);
