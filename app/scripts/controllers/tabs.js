'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')
  .controller('TabsCtrl', function ($scope, tabManager, PaginationManager) {
    $scope.test = {
      totalItems: 64,
      currentPageNum: 1,
    };
    // $scope.totalItems = 64;
    // $scope.currentPageNum = 1;

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    angular.extend($scope, tabManager);
  });
