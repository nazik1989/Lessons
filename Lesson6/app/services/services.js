'use strict';

angular.module('myApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl'
  });
}])

.controller('ServicesCtrl', [function() {

}]);