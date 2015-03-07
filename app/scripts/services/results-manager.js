'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.resultsmanager
 * @description
 * # resultsmanager
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('resultsManager', function (tabManager, paginationManager) {

    // Public API here
    return {
      pushResult: function(resultsObj) {

        var pagination = new paginationManager({
            pageLength: resultsObj.videos.length,
            totalItems: resultsObj.totalItems,
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
