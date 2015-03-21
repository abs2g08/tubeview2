'use strict';

/**
 * @ngdoc directive
 * @name tubeview2App.directive:svgloader
 * @description
 * # svgloader
 */
angular.module('tubeview2App')
  .directive('loader', function () {
    return {
      template:
        '<div class="loader-container"><img src="bower_components/svg-loaders/svg-loaders/ball-triangle.svg" width="40" alt=""></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.start = function() {
          $(element).show();
        }

        scope.stop = function() {
          $(element).hide();
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
