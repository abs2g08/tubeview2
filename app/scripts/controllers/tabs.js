'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')
  .controller('TabsCtrl', function ($scope, tabManager, paginationManager) {
    $scope.pagination = paginationManager;
    angular.extend($scope, tabManager);
  });
