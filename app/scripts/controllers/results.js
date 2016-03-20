'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .controller('ResultsCtrl', function($scope, resultsManager) {
    angular.extend($scope, resultsManager);
  });
