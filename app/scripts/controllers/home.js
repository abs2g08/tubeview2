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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          gapi: function(GAPI) {
            return GAPI.init();
          }
        }
      })
  })

  .controller('HomeCtrl', function ($scope, $alert, youtubeManager) {

    debugger;

    $scope.videos = youtubeManager.search({ part: 'snippet', q: 'Search terms' }).then(function(results){
      results.nextPage().then(function(nextPageResults) {
        debugger;
      });
    });

//      debugger;
    // }).catch(function(resp) {
    //    $alert({
    //       title: 'Error',
    //       content: 'There was an error finding videos: '+resp.data.error.message,
    //       placement: 'top',
    //       duration: 3,
    //       type: 'danger',
    //       show: true
    //     });
    //   });

  });
