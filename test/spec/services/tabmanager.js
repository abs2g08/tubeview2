'use strict';

describe('Service: tabmanager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var tabmanager;
  beforeEach(inject(function (_tabmanager_) {
    tabmanager = _tabmanager_;
  }));

  it('should do something', function () {
    expect(!!tabmanager).toBe(true);
  });

});
