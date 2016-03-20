'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('tubeview2App'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach about string to the scope', function () {
    expect(scope.screenName).toBe('about');
  });
});
