'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.resultsmanager
 * @description
 * # resultsmanager
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('resultsManager', function (tabManager, PaginationManager) {

    var youtubeAdapter = function() {

    }

    // Public API here
    return {
      pushResult: function(resultsObj) {
        var pagination = new PaginationManager({
            pageLength: resultsObj.pageInfo.resultsPerPage,
            //totalItems: resultsObj.totalResults.totalResults,
            data: resultsObj.items,
            ajax: function(paginator, callback) {
              var diff = paginator.currentPageNum - paginator.maxPageReached;
              var origMaxResults = resultsObj.maxResults;
              resultsObj.maxResults = diff*origMaxResults;

              var _this = this;
              resultsObj.nextPage().then(function(resultsObj) {
                _this.maxResults = origMaxResults;
                callback(resultsObj);
              });
            }
        });

        var result = {
          pagination: pagination,
          query: resultsObj,
        }

        tabManager.createTab(result);
      }
    };
  });
