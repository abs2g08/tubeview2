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
    'svgLoader'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(ErrorManager) {

  });
