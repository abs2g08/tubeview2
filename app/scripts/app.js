'use strict';

/**
 * @ngdoc overview
 * @name tubeview2App
 * @description
 * # tubeview2App
 *
 * Main module of the application.
 */
angular
  .module('tubeview2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'dialogs.main',
    'gapi',
    'svgLoader',
    'youtube-embed'
  ])
  .config(function($routeProvider) {

    var originalWhen = $routeProvider.when;

    $routeProvider.when = function(path, route) {
        route.preResolve || (route.preResolve = {});
        angular.extend(route.preResolve, {
          gapi: function(GAPI, $window) {
            $window.initGapi = function() {
              return GAPI.init();
            }

            if ($window.gapiLoaded) {
             return GAPI.init();
            }
          }
        });

        return originalWhen.call($routeProvider, path, route);
    };

  })
  .run(function(ErrorManager) {

  });
