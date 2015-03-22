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
          $(element).find('.spinner').addClass('fade-in');
          if(scope.overlay) $(element).find('.overlay').show();
        }

        scope.stop = function() {
          $(element).find('.spinner').removeClass('fade-in');
          if(scope.overlay) $(element).find('.overlay').hide();
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
