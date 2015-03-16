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

    var defaults = {
      currentPageNum: 1,
      currentPage: null,
      prevPageNum: 1,
      pageLength: 5,
      totalItems: 20,
      maxPageReached: 0,
      data: null,
      ajax: null,
      loader: {
        start: function(){},
        stop: function(){},
      },
      paginatedList: []
    }

    var PaginationManager = function(options) {
      angular.extend(this, defaults, options);
      this.paginatedList = this.paginate(this.data, this.pageLength);
      this.currentPage = this.paginatedList[this.currentPageNum-1];
    }

    PaginationManager.prototype = {

      updateIndexes: function(pageIndex) {
        this.currentPage = this.paginatedList[pageIndex];
        this.prevPageNum = this.currentPage;
        if(this.currentPage > this.maxPageReached) {
          this.maxPageReached = this.currentPage;
        }
      }

      pageChanged: function() {
        var pageIndex = (this.currentPageNum-1);
        if(this.currentPageNum <= this.paginatedList.length) {
          this.updateIndexes();
        } else {
          var _this = this;
          _this.loader.start();
          _this.ajax(_this, function(items) {
            _this.loader.stop();
            _this.pushPage(items);
            _this.updateIndexes();
          });
        }
      },

      pushPage: function(items) {
        if(items.length === this.pageLength.length) {
          this.paginatedList.push(data);
        } else {
          var newPagedList = this.paginate(items);
          this.paginatedList = concat(this.paginatedList, newPagedList);
        }
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
