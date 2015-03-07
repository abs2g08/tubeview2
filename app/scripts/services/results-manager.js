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

    // Public API here
    return {
      pushResult: function(resultsObj) {

        var pagination = new PaginationManager({
            pageLength: resultsObj.totalResults.resultsPerPage,
            totalItems: resultsObj.totalResults.totalResults,
            data: resultsObj.videos,
            ajax: function(callback) {
              resultsObj.nextPage().then(function(data) {
                callback(data);
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
