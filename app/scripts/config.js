'use strict';

angular.module('tubeview2App')

  .constant('ENV', {

  })

  .value('GoogleApp', {
      apiKey: '<api key>',
      clientId: '<client key>',
      scopes: [
        'https://www.googleapis.com/auth/youtube',
      ]
  });
