'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.searchmanager
 * @description
 * # searchmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('searchManager', function (youtubeManager, tabManager) {
    var search = {
      query: '',

      search: function() {
        youtubeManager.search({ part: 'snippet', q: this.query })
          .then(function(resultsObj) {
            tabManager.createTab(resultsObj);
          });
      }
    }

    return search;
  });
