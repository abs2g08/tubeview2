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
        '<div class="loader-container" style="display:none;"><img src="bower_components/svg-loaders/svg-loaders/ball-triangle.svg" width="40" alt=""></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.start = function() {
          $(element.children()[0]).show();
        }

        scope.stop = function() {
          $(element.children()[0]).hide();
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
