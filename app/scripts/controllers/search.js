'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')
  .controller('SearchCtrl', function ($scope, searchManager) {
    angular.extend($scope, searchManager);
  });
