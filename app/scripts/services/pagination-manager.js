'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.paginationManager
 * @description
 * # paginationManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('paginationManager', function () {

    var PaginationManager = function(options) {

      var defaults = {
        currentPageNum: 1,
        currentPage: null,
        pageLength: 10,
        totalItems: 100,
        data: null,
        ajax: null,
        loader: {
          start: function(){},
          stop: function(){},
        }
        paginatedList: []
      }

      if(options.data) {
        options.paginatedList = this.paginate(options.data);
      }

      this.options = $.extend({}, defaults, options);
    }

    PaginationManager.prototype = {

      pageChanged: function() {
        if(this.currentPage < this.options.paginatedList.length) {
          callback(this.options.paginatedList[(this.currentPage-1)]);
        } else {
          var _this = this;
          _this.options.loader.start();
          _this.options.ajax(function(data) {
            _this.options.loader.stop();
            _this.paginateList.push(data);
            callback(data);
          });
        }
      },

      paginate: function(list) {
        var pagedList = [], i, len;

        if(list.length >= this.options.pageLength) {
          for (i = 0, len = list.length; i < len; i += this.options.pageLength) {
            pagedList.push(list.slice(i, i + this.options.pageLength));
          }
        } else {
          pagedList.push(list);
        }
        return pagedList;
      }

    }

    return PaginationManager;

  });
