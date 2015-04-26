'use strict';

var init = function() {
  if (window.initGapi) {
    window.initGapi();
  } else {
    window.gapiLoaded = true;
  }
};

/**
 * @ngdoc service
 * @name tubeview2App.youtubeService
 * @description
 * # youtubeService
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('youtubeManager', function(Youtube, GAPI, $window, $q) {

    var Result = function(queryParams, data, svgLoaderManager) {
      this.queryParams = queryParams;
      this.currentPageNum = 1;

      angular.extend(this, data);
    };

    Result.prototype = {
      nextPage: function(maxResults) {
        this.queryParams.pageToken = this.nextPageToken;

        var _this = this;
        return Youtube.search(this.queryParams).then(function(data) {
          _this.currentPageNum++;
          angular.extend(_this, data);
        });
      }
    };

    var defaults = {
      q: '',
      part: 'snippet',
      maxResults: 10,
      type: 'video'
    };

    var gapiFullyLoaded = false;

    return {

      search: function(queryParams) {
        var params = angular.extend({}, defaults, queryParams);
        return Youtube.search(params).then(function(data) {
          return new Result(params, data);
        });
      },

      get: function(id) {
        return Youtube.get('videos', {
          id: id,
          part: 'contentDetails'
        }).then(function(data) {
          return data.items[0].id;
        });
      },

      init: function() {
        return $q(function(resolve, reject) {
          if (gapiFullyLoaded) {
            resolve();
          }

          $window.initGapi = function() {
            gapiFullyLoaded = true;
            GAPI.init().then(function() {
              resolve();
            });
          };

          if ($window.gapiLoaded) {
            gapiFullyLoaded = true;
            GAPI.init().then(function() {
              resolve();
            });
          }
        });
      }
    };
  });
