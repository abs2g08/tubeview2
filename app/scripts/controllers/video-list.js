'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:VideoListCtrl
 * @description
 * # VideoListCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/video-list.html',
        controller: 'VideoListCtrl',
        resolve: {
          //
        }
      })
  })

  .controller('VideoListCtrl', function ($scope, $alert, youtubeAPI) {

    youtubeAPI.findVideos({query: 'jayz'}).then(function(data) {
      youtubeAPI.nextPage().then(function(data){
        debugger;
      });
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
