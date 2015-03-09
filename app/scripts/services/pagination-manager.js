'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.paginationManager
 * @description
 * # paginationManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('PaginationManager', function () {

    var PaginationManager = function(options) {

      var defaults = {
        currentPageNum: 1,
        currentPage: null,
        pageLength: 5,
        totalItems: 20,
        data: null,
        ajax: null,
        loader: {
          start: function(){},
          stop: function(){},
        },
        paginatedList: []
      }

      this.options = $.extend({}, defaults, options);
      this.options.paginatedList = this.paginate(this.options.data, this.options.pageLength);
      this.options.currentPage = this.options.paginatedList[this.options.currentPageNum-1];
    }

    PaginationManager.prototype = {

      pageChanged: function() {
        var pageIndex = (this.options.currentPageNum-1);
        if(this.options.currentPageNum <= this.options.paginatedList.length) {
          this.options.currentPage = this.options.paginatedList[pageIndex];
        } else {
          var _this = this;
          _this.options.loader.start();
          _this.options.ajax(function(data) {
            _this.options.loader.stop();
            _this.options.paginatedList.push(data.videos);
            _this.options.currentPage = _this.options.paginatedList[pageIndex];
          });
        }
      },

      addPage: function(data) {
        //TO-DO: we need this incase we are doing caching
      },

      paginate: function(list, pageLength) {
        var pagedList = [], i, len;

        if(list.length >= pageLength) {
          for (i = 0, len = list.length; i < len; i += pageLength) {
            pagedList.push(list.slice(i, i + pageLength));
          }
        } else {
          pagedList.push(list);
        }
        return pagedList;
      }

    }

    return PaginationManager;

  });
