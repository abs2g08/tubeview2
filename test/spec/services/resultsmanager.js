'use strict';

describe('Service: resultsManager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var resultsmanager;
  beforeEach(inject(function (resultsManager) {
    resultsmanager = resultsManager;
  }));

  it('create results manager with no errors', function () {
    resultsmanager.pushResult({
      pageInfo: {
        resultsPerPage: 5,
        totalResults: 10
      },
      items: [1,2,3,4,5,6,7,8,9,10]
    });
  });
});
