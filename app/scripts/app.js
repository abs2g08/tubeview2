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

  })
  .run(function(ErrorManager) {

  });
