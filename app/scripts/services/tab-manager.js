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
        for (var i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].$$hashKey === tab.$$hashKey) {
            this.tabs.splice(i, 1);
          }
        }
      }
    };

    return tabManager;
  });
