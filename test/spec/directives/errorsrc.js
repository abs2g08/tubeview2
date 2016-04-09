'use strict';

describe('Directive: errorSrc', function () {

  // load the directive's module
  beforeEach(module('tubeview2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('src attribute should fallback ng-errorsrc if remote image fails to load', function(done){
    inject(function ($compile) {
      element = angular.element('<img ng-src="/does/not/exist" ng-errorsrc="http://lorempixel.com/400/200/" />');
      element = $compile(element)(scope);
      scope.$digest();
      
      setTimeout(function() {
        expect(element[0].src).toBe('http://lorempixel.com/400/200/');
        done();
      }, 100);
    });
  });
});
