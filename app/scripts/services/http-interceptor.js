'use strict';

/**
 * @ngdoc service
 * @name tubeviewApp.httpInterceptor
 * @description
 * # httpInterceptor
 * Factory in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('httpInterceptor', function($q, $rootScope, svgLoaderManager) {

    var numLoadings = 0;

    var httpProvider = {
      request: function(config) {
        numLoadings++;

        // Show loader
        svgLoaderManager.start();
        return config || $q.when(config);

      },
      response: function(response) {
        if ((--numLoadings) === 0) {

          // Hide loader
          svgLoaderManager.stop();
        }

        return response || $q.when(response);
      },
      responseError: function(response) {
        if (!(--numLoadings)) {
          $rootScope.$emit('httpError', response);

          // Hide loader
          svgLoaderManager.stop();
        }
        return $q.reject(response);
      }
    };

    return httpProvider;
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  });
