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
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
