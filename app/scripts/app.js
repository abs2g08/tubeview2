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
  .run(function(GoogleApp) {
    if(GoogleApp.apiKey === '<api key>') {
      throw 'Please set google API key in config.js';
    }

    if(GoogleApp.clientId === 'clientId') {
      throw 'Please set clientId';
    }
  });
