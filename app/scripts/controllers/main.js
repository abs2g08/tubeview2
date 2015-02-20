'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')
  .controller('MainCtrl', function ($scope, $alert, youtubeAPI) {

    youtubeAPI.findVideo('test').then(function(data) {

    }).catch(function(resp) {
      $alert({
        title: 'Error',
        content: 'There was an error finding videos: '+resp.data.error.message,
        placement: 'top',
        duration: 3,
        type: 'danger',
        show: true
      });
    });

  });
