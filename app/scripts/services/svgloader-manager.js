'use strict';

/**
 * @ngdoc service
 * @name tubeview2App.searchmanager
 * @description
 * # searchmanager
 * Service in the tubeview2App.
 */
angular.module('tubeview2App')
  .factory('svgLoaderManager', function ($rootScope) {
    var config = {};

    config.start = function (key) {
      $rootScope.$broadcast('us-spinner:spin');
    };

    config.stop = function (key) {
      $rootScope.$broadcast('us-spinner:stop');
    };

    return config;
  });
