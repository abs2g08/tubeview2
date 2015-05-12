'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.searchmanager
 * @description
 * # searchmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('searchManager', function(youtubeManager, resultsManager) {

    var searchManager = {
      query: '',
      noResultsQuery: '',
      noResults: false,
      submitForm: function() {
        var _this = this;

        youtubeManager
          .search({
            q: this.query,
          })
          .then(function(resultsObj) {
            if (resultsObj.items.length > 0) {
              resultsManager.pushResult(resultsObj);
              _this.noResults = false;
              _this.query = '';
            } else {
              _this.noResults = true;
              _this.noResultsQuery = angular.copy(_this.query);
            }
          });
      }
    };

    return searchManager;
  });
