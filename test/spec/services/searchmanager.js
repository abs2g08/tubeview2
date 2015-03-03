'use strict';

describe('Service: searchmanager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var searchmanager;
  beforeEach(inject(function (_searchmanager_) {
    searchmanager = _searchmanager_;
  }));

  it('should do something', function () {
    expect(!!searchmanager).toBe(true);
  });

});
