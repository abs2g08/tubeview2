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

    var youtubeAdapter = function(paginator, resultsObj, callback) {
      var diff = paginator.currentPageNum - paginator.maxPageReached;
      var origMaxResults = resultsObj.queryParams.maxResults;
      resultsObj.queryParams.maxResults = diff*origMaxResults;

      resultsObj.nextPage().then(function() {
        resultsObj.queryParams.maxResults = origMaxResults;
        callback(resultsObj.items);
      });
    }

    // Public API here
    return {
      pushResult: function(resultsObj) {
        var pagination = new PaginationManager({
            pageLength: resultsObj.pageInfo.resultsPerPage,
            //totalItems: resultsObj.totalResults.totalResults,
            data: resultsObj.items,
            ajax: function(paginator, callback) {
              youtubeAdapter(paginator, resultsObj, callback);
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
