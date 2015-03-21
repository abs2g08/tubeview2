'use strict';

describe('Directive: svgloader', function () {

  // load the directive's module
  beforeEach(module('tubeview2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<svgloader></svgloader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the svgloader directive');
  }));
});
