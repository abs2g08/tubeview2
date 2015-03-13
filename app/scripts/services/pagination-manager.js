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

    var PaginationManager = function(options) {
      angular.extend(this, defaults, options);
      this.paginatedList = this.paginate(this.data, this.pageLength);
      this.currentPage = this.paginatedList[this.currentPageNum-1];
    }

    PaginationManager.prototype = {

      pageChanged: function() {
        var pageIndex = (this.currentPageNum-1);
        if(this.currentPageNum <= this.paginatedList.length) {
          this.currentPage = this.paginatedList[pageIndex];
        } else {
          var _this = this;
          _this.loader.start();
          _this.ajax(_this.currentPageNum, function(data) {
            _this.loader.stop();
            _this.paginatedList.push(data.items);
            _this.currentPage = _this.paginatedList[pageIndex];
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
