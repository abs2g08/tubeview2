'use strict';

describe('Directive: errorSrc', function () {

  // load the directive's module
  beforeEach(module('tubeview2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<error-src></error-src>');
    element = $compile(element)(scope);
    debugger;
    expect(element.text()).toBe('this is the errorSrc directive');
  }));
});
