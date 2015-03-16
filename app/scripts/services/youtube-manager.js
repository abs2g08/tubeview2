'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.youtubeService
 * @description
 * # youtubeService
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('youtubeManager', function (Youtube) {

    //TO-DO: completely start over. I want to make a generic object 'result'

    var Result = function(queryParams, data) {
      this.queryParams = queryParams;
      this.currentPage = 1;

      angular.extend(this, data);
    }

    Result.prototype = {
      nextPage: function(maxResults) {
        this.queryParams.pageToken = this.nextPageToken;

        var _this = this;
        Youtube.search(this.queryParams).then(function(data) {
          _this.currentPage++;
          angular.extend(this, data);
        });
      },
      prevPage: function() {
        //TO-DO
      }
    }

    var defaults = {
      'q': '',
      'part': 'snippet',
      'maxResults': 10
    }

    return {
      search: function(queryParams) {
        var params = angular.extend({}, defaults, queryParams);
        return Youtube.search(params).then(function(data) {
          return new Result(params, data);
        });
      }
    }

    //return Youtube;
  });
