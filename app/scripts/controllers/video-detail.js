
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
      .when('/videos/:videoId', {
        templateUrl: 'views/video-detail.html',
        controller: 'VideoDetailCtrl',
        resolve: {
          videoData: function($route, youtubeManager) {
            return youtubeManager.init().then(function() {
              return youtubeManager.get($route.current.params.videoId);
            });
          }
        }
      });
  })

  .controller('VideoDetailCtrl', function($scope, videoData) {
    $scope.screenName = 'video-detail';
    $scope.videoData = videoData;
    $scope.videoLoaded = false;

    $scope.$on('youtube.player.ready', function() {
      $scope.videoLoaded = true;
    });
  });
