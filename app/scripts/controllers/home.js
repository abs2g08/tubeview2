'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:VideoListCtrl
 * @description
 * # VideoListCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          gapi: function(GAPI, $window) {
            $window.initGapi = function() {
              return GAPI.init();
            }

            if($window.gapiLoaded) {
             return GAPI.init();
            }
          }
        }
      })
  })

  .controller('HomeCtrl', function($scope) {
  });
