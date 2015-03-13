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

    // var originalSearch = Youtube.search;

    // Youtube['search'] = function(options) {
    //   return originalSearch(options).then(function(data) {

    //     var nextPageToken = data.nextPageToken;
    //     var prevPageToken = data.prevPageToken || '';

    //     return {
    //       query: options.q,
    //       videos: data.items,
    //       totalResults: data.pageInfo,
    //       currentPage: 0,
    //       startIndex: 0,
    //       nextPage: function() {
    //         options.pageToken = nextPageToken;

    //         var _this = this;
    //         return originalSearch(options).then(function(data) {
    //           nextPageToken = data.nextPageToken;
    //           prevPageToken = data.prevPageToken;
    //           _this.currentPage = _this.currentPage++;
    //           return data;
    //         });
    //       },
    //       // prevPage: function() {
    //       //   options.pageToken = prevPageToken;
    //       //   return Youtube.search(options);
    //       // },
    //       getPage: function(num) {
    //         options['start-index'] = (this.currentPage*options['max-results'] + 1);

    //         var _this = this;
    //         return originalSearch(options).then(function(data) {
    //           nextPageToken = data.nextPageToken;
    //           prevPageToken = data.prevPageToken;
    //           _this.currentPage = num;
    //           return data;
    //         });
    //       }
    //     }

    //   });
    // }

    //TO-DO: completely start over. I want to make a generic object 'result'

    var Result = function(queryParams, data) {
      this.queryParams = queryParams;
      this.currentPage = 1;

      angular.extend(this, data);
    }

    Result.prototype = {
      nextPage: function() {
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
