'use strict';

/**
 * @ngdoc directive
 * @name tubeview2App.directive:errorSrc
 * @description
 * # errorSrc
 */
angular.module('tubeview2App')

  .directive('ngErrorsrc', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src !== attrs.ngErrorsrc) {
            attrs.$set('src', attrs.ngErrorsrc);
          }
        });
      }
    };
  });
