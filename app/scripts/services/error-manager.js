'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.errorManager
 * @description
 * # errorManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')

  .factory('ErrorManager', function($rootScope, dialogs) {
    var errorManager = {
      handleHttpError: function(event, resp) {
        var status = resp.status;
        var statusText = resp.statusText;

        var title = 'Status: ' + status;
        var content = 'An error occured, ' + statusText + '.';
        dialogs.error(title, content);
      }
    };

    $rootScope.$on('httpError', errorManager.handleHttpError);

    return errorManager;
  });
