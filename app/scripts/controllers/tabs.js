'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')
  .controller('TabsCtrl', function ($scope, tabManager) {
    angular.extend($scope, tabManager);

    // $scope.totalItems = 64;
    // $scope.currentPage = 4;

    // $scope.setPage = function (pageNo) {
    //   alert('test');
    //   $scope.currentPage = pageNo;
    // };

    // $scope.pageChanged = function() {
    //   $log.log('Page changed to: ' + $scope.currentPage);
    // };

    // $scope.close = function() {
    //   alert('test');
    // };

    // $scope.select = function() {
    //   alert('test1');
    // }

    // $scope.maxSize = 5;
    // $scope.bigTotalItems = 175;
    // $scope.bigCurrentPage = 1;
  });
