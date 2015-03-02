'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.youtubeAPI
 * @description
 * # youtubeAPI
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('youtubeAPI', function ($resource, ENV) {
    //see: https://github.com/mikecrittenden/toogles/blob/master/app/scripts/services/youtube.js

    var _nextPageToken, _prevPageToken, _currentQuery = '';
    return {
      config: {
        maxResults: 5,
        searchType: 'video',
      },
      findVideos: function (options) {

        var Search = $resource('https://www.googleapis.com/youtube/v3/search');

        if(!options.query) {
          options.query = _currentQuery;
        } else {
          options.query = encodeURIComponent(options.query)
        }

        if(!options.pageToken) {
          options.pageToken = '';
        }

        options = $.extend(angular.copy(this.config), options);

        var _this = this;

        return Search.get({
          key: ENV.youtubeAPI.key,
          type: options.searchType,
          maxResults: options.maxResults,
          part: 'id,snippet',
          pageToken: options.pageToken,
          q: options.query
        }).$promise.then(function(response) {
          _nextPageToken = response.data.nextPageToken;
          _prevPageToken = response.data.prevPageToken || '';
          return response.data.items;
        });
      },
      getVideo: function(id) {
        return $http.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: ENV.youtubeAPI.key,
            part: 'id,snippet',
            id: id
          }
        });
      },
      nextPage: function() {
        return this.findVideos({pageToken: _nextPageToken});
      },
      previousPage: function() {
        return this.findVideos({pageToken: _prevPageToken});
      }
    };
  });
