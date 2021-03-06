'use strict';

angular.module('svgLoader', [])

  .factory('svgLoaderManager', function($rootScope) {
    var config = {};

    config.start = function() {
      $rootScope.$broadcast('us-spinner:spin');
    };

    config.stop = function() {
      $rootScope.$broadcast('us-spinner:stop');
    };

    return config;
  })

  .directive('loader', function() {
    return {
      template:
        '<div class="loader-container">' +
        '<div class="spinner" style="display:none;">' +
        '<img src="bower_components/svg-loaders/' + 
        'svg-loaders/ball-triangle.svg" width="40" alt="">' +
        '</div><div class="overlay" style="display:none;">' +
        '</div></div>',
      restrict: 'E',
      scope: {
        overlay: '='
      },
      link: function postLink(scope, element) {

        scope.start = function() {
          var spinner = $(element).find('.spinner');
          spinner.fadeIn();
          spinner.addClass('fly-up');

          if (scope.overlay) {
            var overlay = $(element).find('.overlay');
            overlay.show();
            overlay.addClass('fade-in');
          }
        };

        scope.stop = function() {
          var spinner = $(element).find('.spinner');
          spinner.hide();
          spinner.removeClass('fly-up');

          if (scope.overlay) {
            var overlay = $(element).find('.overlay');
            overlay.hide();
            overlay.removeClass('fade-in');
          }
        };

        scope.$on('us-spinner:spin', function() {
          scope.start();
        });

        scope.$on('us-spinner:stop', function() {
          scope.stop();
        });
      }
    };
  });
