'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:VideoListCtrl
 * @description
 * # VideoListCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          initYoutube: function(youtubeManager) {
            return youtubeManager.init();
          }
        }
      })
  })

  .controller('HomeCtrl', function($scope) {
    $scope.screenName = 'home';
  });
