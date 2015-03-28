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
    var search = {
      query: '',
      search: function() {
        var _this = this;
        youtubeManager
          .search({
            q: this.query,
          }).then(function(resultsObj) {
            resultsManager.pushResult(resultsObj);
            _this.query = '';
          });
      }
    };

    return search;
  });
