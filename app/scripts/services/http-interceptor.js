'use strict';

/**
 * @ngdoc service
 * @name tubeviewApp.httpInterceptor
 * @description
 * # httpInterceptor
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('httpInterceptor', function ($q, svgLoaderManager) {
    var numLoadings = 0;

    return {
      request: function (config) {
        numLoadings++;

        // Show loader
        svgLoaderManager.start();
        return config || $q.when(config);

      },
      response: function (response) {
        if ((--numLoadings) === 0) {

          // Hide loader
          svgLoaderManager.stop();
        }
        return response || $q.when(response);
      },
      responseError: function (response) {
        if (!(--numLoadings)) {
          // Hide loader
          svgLoaderManager.stop();
        }
        return $q.reject(response);
      }
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  });
