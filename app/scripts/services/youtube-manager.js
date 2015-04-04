'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.youtubeService
 * @description
 * # youtubeService
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('youtubeManager', function(Youtube) {

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
      },
      prevPage: function() {
        //TO-DO
      }
    };

    var defaults = {
      q: '',
      part: 'snippet',
      maxResults: 10,
      type: 'video'
    };

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
      }
    };
  });
