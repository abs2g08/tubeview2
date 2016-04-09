'use strict'

describe('Module: svgloader', function () {

  // load the directive's module
  beforeEach(module('tubeview2App'));

  var compile, scope, directiveElem;

  beforeEach(function() {
    inject(function($compile, $rootScope) {
      compile = $compile;
      scope = $rootScope.$new();
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement() {
    var element = angular.element('<loader overlay="true"></loader>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have spinner element and overlay', function () {
    var spinner = directiveElem.find('.spinner');
    expect(spinner).toBeDefined();

    var overlay = directiveElem.find('.overlay');
    expect(overlay).toBeDefined();
  });

});
