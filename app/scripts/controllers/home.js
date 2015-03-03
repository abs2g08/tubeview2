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

  .controller('HomeCtrl', function ($scope, $alert) {

    // var search = function(query) {
    //   youtubeManager.search({ part: 'snippet', q: query }).then(function(resultsObj) {
    //     createNewTab(resultsObj);
    //     // results.nextPage().then(function(nextPageResults) {
    //     //   debugger;
    //     // });
    //   });
    // }

  });
