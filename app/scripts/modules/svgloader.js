'use strict';

angular.module('svgLoader', [])

  .factory('svgLoaderManager', function ($rootScope) {
    var config = {};

    config.start = function (key) {
      $rootScope.$broadcast('us-spinner:spin');
    };

    config.stop = function (key) {
      $rootScope.$broadcast('us-spinner:stop');
    };

    return config;
  })

  .directive('loader', function () {
    return {
      template:
        '<div class="loader-container"><div class="spinner"><img src="bower_components/svg-loaders/svg-loaders/ball-triangle.svg" width="40" alt=""></div><div class="overlay" style="display:none;"></div></div>',
      restrict: 'E',
      scope: {
        overlay: '='
      },
      link: function postLink(scope, element, attrs) {

        scope.start = function() {
          $(element).find('.spinner').show();
          $(element).find('.spinner').addClass('fly-up');
          if(scope.overlay) {
            var overlay = $(element).find('.overlay');
            overlay.show();
            overlay.addClass('fade-in');
          }
        }

        scope.stop = function() {
          //$(element).find('.spinner').hide();
          $(element).find('.spinner').removeClass('fly-up');
          if(scope.overlay) {
            var overlay = $(element).find('.overlay');
            overlay.hide();
            overlay.removeClass('fade-in');
          }
        }

        scope.$on('us-spinner:spin', function (event) {
          scope.start();
        });

        scope.$on('us-spinner:stop', function (event) {
          scope.stop();
        });
      }
    };
  });
