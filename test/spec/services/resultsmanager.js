'use strict';

describe('Service: resultsmanager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var resultsmanager;
  beforeEach(inject(function (_resultsmanager_) {
    resultsmanager = _resultsmanager_;
  }));

  it('should do something', function () {
    expect(!!resultsmanager).toBe(true);
  });

});
