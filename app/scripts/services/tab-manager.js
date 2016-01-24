'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.tabmanager
 * @description
 * # tabmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')

  .factory('tabManager', function() {
    var tabManager = {
      tabs: [],
      createTab: function(page) {
        page.active = true;
        this.tabs.push(page);
      },
      close: function(tab) {
        var _this = this;
        this.tabs.forEach(function(currentTab, i) {
          if (currentTab.$$hashKey === tab.$$hashKey) {
            _this.tabs.splice(i, 1);
          }
        });
      }
    };

    return tabManager;
  });
