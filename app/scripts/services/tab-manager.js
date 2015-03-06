'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.tabmanager
 * @description
 * # tabmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('tabManager', function (paginationManager) {



    return {
      tabs: [],
      deleteTab: function() {
        for(var i=0; i<this.tabs.length; i++) {
          if(this.tabs[i].active === true) {
            this.tabs.splice(i, 1);
          }
        }
      },
      createTab: function(resultsObj) {
        this.tabs.push({
          result: resultsObj,
          active: true,
        });
      }
    }
  });
