
'use strict';

/**
 * @ngdoc function
 * @name tubeview2App.controller:VideoDetailCtrl
 * @description
 * # VideoDetailCtrl
 * Controller of the tubeview2App
 */
angular.module('tubeview2App')

  .config(function($routeProvider) {
    $routeProvider
      .when('/videos/:video_id', {
        templateUrl: 'views/video-detail.html',
        controller: 'VideoDetailCtrl',
        resolve: {
          videoData: function($route, youtubeManager, svgLoaderManager) {
            //svgLoaderManager.start();
            return youtubeManager.init().then(function() {
              return youtubeManager.get($route.current.params.video_id);
            });
          }
        }
      });
  })

  .controller('VideoDetailCtrl', function($scope, videoData, svgLoaderManager) {
    $scope.screenName = 'video-detail';

    $scope.videoData = videoData;

    $scope.$on('youtube.player.ready', function ($event, player) {
      //svgLoaderManager.stop();
    });
  });
