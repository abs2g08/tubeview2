'use strict';

describe('Service: youtubeAPI', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var youtubeAPI;
  beforeEach(inject(function (_youtubeAPI_) {
    youtubeAPI = _youtubeAPI_;
  }));

  it('should do something', function () {
    expect(!!youtubeAPI).toBe(true);
  });

});
