'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.errorManager
 * @description
 * # errorManager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('ErrorManager', function($rootScope, dialogs, $translate) {

    $rootScope.lang = 'en-US';
    $rootScope.language = 'English';

    var errorManager = {
      handleHttpError: function(event, resp) {
        debugger;
        var status = resp.status;
        var statusText = resp.statusText;

        var title = 'Status: ' + resp.status;
        var content = 'An error occured, ' + resp.statusText + '.';
        dialogs.error(title, content);
      }
    };

    $rootScope.$on('httpError', errorManager.handleHttpError);

    return errorManager;
  })
      $translateProvider.translations('en-US',{
              DIALOGS_ERROR: "Error",
              DIALOGS_ERROR_MSG: "An unknown error has occurred.",
              DIALOGS_CLOSE: "Close",
              DIALOGS_PLEASE_WAIT: "Please Wait",
              DIALOGS_PLEASE_WAIT_ELIPS: "Please Wait...",
              DIALOGS_PLEASE_WAIT_MSG: "Waiting on operation to complete.",
              DIALOGS_PERCENT_COMPLETE: "% Complete",
              DIALOGS_NOTIFICATION: "Notification",
              DIALOGS_NOTIFICATION_MSG: "Unknown application notification.",
              DIALOGS_CONFIRMATION: "Confirmation",
              DIALOGS_CONFIRMATION_MSG: "Confirmation required.",
              DIALOGS_OK: "OK",
              DIALOGS_YES: "Yes",
              DIALOGS_NO: "No"
          });
