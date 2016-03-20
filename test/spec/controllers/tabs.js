'use strict';

describe('Controller: TabsCtrl', function () {

  // load the controller's module
  beforeEach(module('tubeview2App'));

  var TabsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabsCtrl = $controller('TabsCtrl', {
      $scope: scope
    });
  }));

  it('should attach tabs to the scope', function () {
    expect(scope.tabs.length).toEqual(0);
  });
});
