'use strict';

angular.module('tubeview2App')

  .config(function($translateProvider) {
      $translateProvider.translations('en-US', {
          DIALOGS_ERROR: 'Error',
          DIALOGS_ERROR_MSG: 'An unknown error has occurred.',
          DIALOGS_CLOSE: 'Close',
          DIALOGS_PLEASE_WAIT: 'Please Wait',
          DIALOGS_PLEASE_WAIT_ELIPS: 'Please Wait...',
          DIALOGS_PLEASE_WAIT_MSG: 'Waiting on operation to complete.',
          DIALOGS_PERCENT_COMPLETE: '% Complete',
          DIALOGS_NOTIFICATION: 'Notification',
          DIALOGS_NOTIFICATION_MSG: 'Unknown application notification.',
          DIALOGS_CONFIRMATION: 'Confirmation',
          DIALOGS_CONFIRMATION_MSG: 'Confirmation required.',
          DIALOGS_OK: 'OK',
          DIALOGS_YES: 'Yes',
          DIALOGS_NO: 'No',

          SEARCH_ERROR: 'No results for',
          SEARCH_FOR: 'Search for...',
          SEARCH_BTN_TEXT: 'Search',
          SEARCH_BY: 'by'
      });
      $translateProvider.preferredLanguage('en-US');
  });
