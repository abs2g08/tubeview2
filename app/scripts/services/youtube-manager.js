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
    var _nextPageToken, _prevPageToken, _currentQuery = '';

    var originalSearch = Youtube.search;

    Youtube['search'] = function(options) {
      return originalSearch(options).then(function(data) {
        _nextPageToken = data.nextPageToken;
        _prevPageToken = data.prevPageToken || '';
        return {
          videos: data.items,
          totalResults: data.pageInfo,
          searchOpts: options,
          nextPage: function() {
            options.pageToken = _nextPageToken;
            return Youtube.search(options);
          },
          prevPage: function() {
            options.pageToken = _prevPageToken;
            return Youtube.search(options);
          }
        }
      });
    }
    return Youtube;
  });
