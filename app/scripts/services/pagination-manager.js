'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.paginationManager
 * @description
 * # paginationManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('paginationManager', function () {

    return {

    }

        // var getPagedList = function(fullList) {
        //   var pagedList = [], i, len;

        //   if(fullList.length >= 10) {
        //     for (i = 0, len = fullList.length; i < len; i += 10) {
        //       pagedList.push(fullList.slice(i, i + 10));
        //     }
        //   } else {
        //     pagedList.push(fullList);
        //   }
        //   return pagedList;
        // };

        // $scope.totalItems = $scope.tab.results.length;
        // $scope.currentPage = 1;
        // $scope.tab.pagedResult = getPagedList($scope.tab.results)[0];

        // $scope.setPage = function (pageNo) {
        //   $scope.currentPage = pageNo;
        // };

        // $scope.pageChanged = function() {
        //   $scope.tab.pagedResult = getPagedList($scope.tab.results)[($scope.currentPage-1)];
        // };

        // $scope.bigTotalItems = 175;
        // $scope.bigCurrentPage = 1;

  });
