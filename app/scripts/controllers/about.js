'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
  })

  .controller('AboutCtrl', function($scope) {
    $scope.screenName = 'about';
  });
