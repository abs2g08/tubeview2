'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('tubeview2App'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach noResultsQuery to the scope', function () {
    expect(scope.noResultsQuery).toBe('');
  });
});
