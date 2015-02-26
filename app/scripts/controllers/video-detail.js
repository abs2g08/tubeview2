
'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:VideoDetailCtrl
 * @description
 * # VideoDetailCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/video/:video_id', {
        templateUrl: 'views/video-detail.html',
        controller: 'VideoDetailCtrl',
        resolve: {
          videoData: function($route, youtubeAPI) {
            debugger;
            youtubeAPI.getVideo({query: $route.current.params.video_id});
          }
        }
      })
  })

  .controller('VideoDetailCtrl', function ($scope, videoData) {
    debugger;
  });
