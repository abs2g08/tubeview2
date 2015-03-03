'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.youtubeService
 * @description
 * # youtubeService
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('youtubeManager', function (Youtube, $q) {

    var originalSearch = Youtube.search;

    Youtube['search'] = function(options) {
      return originalSearch(options).then(function(data) {

        var nextPageToken = data.nextPageToken;
        var prevPageToken = data.prevPageToken || '';

        return {
          query: options.q,
          videos: data.items,
          totalResults: data.pageInfo,
          nextPage: function() {
            options.pageToken = nextPageToken;
            return Youtube.search(options);
          },
          prevPage: function() {
            options.pageToken = prevPageToken;
            return Youtube.search(options);
          }
        }

      });
    }
    return Youtube;
  });
