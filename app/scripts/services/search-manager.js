'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.searchmanager
 * @description
 * # searchmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('searchManager', function (youtubeManager, resultsManager, svgLoaderManager) {
    var search = {
      query: '',
      search: function() {
        svgLoaderManager.start();
        youtubeManager
          .search({
            q: this.query,
          }).then(function(resultsObj) {
            svgLoaderManager.stop();
            resultsManager.pushResult(resultsObj);
          });
      }
    }

    return search;
  });
