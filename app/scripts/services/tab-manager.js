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

    return {
      tabs: [],
      createTab: function(page) {
        page.active = true;
        this.tabs.push(page);
      },
      close: function() {
        for (var i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].active === true) {
            this.tabs.splice(i, 1);
          }
        }
      }
    };
  });
