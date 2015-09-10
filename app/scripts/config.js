'use strict';

angular.module('tubeview2App')

  .constant('ENV', {

  })

  .value('GoogleApp', {
      apiKey: '<api key>', //NOTE: please add your very own google API key
      clientId: '<client key>', // and client key
      scopes: [
        'https://www.googleapis.com/auth/youtube',
      ]
  });
