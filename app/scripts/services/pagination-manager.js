'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.paginationManager
 * @description
 * # paginationManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')

  .factory('PaginationManager', function() {
    var defaults = {
      currentPageNum: 1,
      currentPage: null,
      prevPageNum: 1,
      pageLength: 5, // total length to paginate
      totalItems: 50,
      maxSize: 5, // length that is shown
      maxPageReached: 1,
      data: null,
      ajax: null,
      loader: {
        start: function() {},
        stop: function() {},
      },
      paginatedList: []
    };

    var PaginationManager = function(options) {
      angular.extend(this, defaults, options);
      this.paginatedList = this.paginate(this.data, this.pageLength);
      this.currentPage = this.paginatedList[this.currentPageNum - 1];
    };

    PaginationManager.prototype = {

      updateIndexes: function(pageIndex) {
        this.currentPage = this.paginatedList[pageIndex];
        this.prevPageNum = this.currentPageNum;
        if (this.currentPageNum > this.maxPageReached) {
          this.maxPageReached = this.currentPageNum;
        }
      },

      pageChanged: function() {
        var pageIndex = (this.currentPageNum - 1);
        if (this.currentPageNum <= this.paginatedList.length) {
          this.updateIndexes(pageIndex);
        } else {
          var _this = this;
          _this.loader.start();
          _this.ajax(_this, function(items) {
            _this.loader.stop();
            _this.pushPage(items);
            _this.updateIndexes(pageIndex);
          });
        }
      },

      pushPage: function(items) {
        if (items.length === this.pageLength) {
          this.paginatedList.push(items);
        } else {
          var newPagedList = this.paginate(items, this.pageLength);
          this.paginatedList = this.paginatedList.concat(newPagedList);
        }
      },

      paginate: function(list, pageLength) {
        var pagedList = [], i, len;

        if (list.length >= pageLength) {
          for (i = 0, len = list.length; i < len; i += pageLength) {
            pagedList.push(list.slice(i, i + pageLength));
          }
        } else {
          pagedList.push(list);
        }
        return pagedList;
      }

    };
    return PaginationManager;
  });
