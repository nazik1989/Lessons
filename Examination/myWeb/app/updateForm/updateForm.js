'use strict';

angular.module('myApp.updateForm', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/updateForm', {
            templateUrl: 'updateForm/updateForm.html',
            controller: 'UpdateFormCtrl'
        });
    }])

    .controller('UpdateFormCtrl', ['$scope','$http','service','$location',function($scope,$http,service,$location){

        $scope.customer = {};

        var PageUrl = $location.url();
        var userId = PageUrl.slice(12);
        $scope.customer.hinId = userId;
        console.log($scope.customer.hinId);
        console.log(PageUrl);

        $scope.Edite = function() {
            var uploadUrl = "http://127.0.0.1:8081/update_user";
            service.post(uploadUrl, $scope.customer).then(function (res) {
                $scope.errors = res.data;
            });
        };
            // console.log("userId"+userId);
            //console.log("request"+ $scope.customer);

            // -------------- Timeout function for update my page  ----------------------//
            // function timeoutFunction() {
            //     setTimeout(function(){location.reload(); }, 200);}
            // timeoutFunction();


}]);