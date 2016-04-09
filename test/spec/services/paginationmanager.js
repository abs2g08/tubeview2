'use strict';

describe('Service: PaginationManager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var paginationmanager;
  beforeEach(inject(function (PaginationManager) {
    paginationmanager = PaginationManager;
  }));

  function createArray(frm, to) {
    var res = [];
    for(var i=frm; i<=to; i++) {
      res.push(i);
    }
    return res;
  }

  function getTestPM() {
    var pagination = new paginationmanager({
        pageLength: 5,
        totalItems: 10,
        data: createArray(1, 10)
    });

    return pagination;
  }

  it('paginate data into two lists: [1,2,4,5], [6,7,8,9,10]', function () {
    var pagination = getTestPM();

    expect(pagination.paginatedList[0]).toEqual(createArray(1,5));
    expect(pagination.paginatedList[1]).toEqual(createArray(6,10));
  });

  it('current page should default to: [1,2,4,5]', function () {
    var pagination = getTestPM();

    expect(pagination.currentPage).toEqual(createArray(1,5));
  });

  it('should change to next page: [6,7,8,9,10]', function () {
    var pagination = getTestPM();
    pagination.currentPageNum = 2;
    pagination.pageChanged();

    expect(pagination.currentPage).toEqual(createArray(6,10));
  });

  it('should add new page over two arrays: [11,12,13,14,15], [16,17]', function () {
    var pagination = getTestPM();
    pagination.pushPage(createArray(11,17));

    expect(pagination.paginatedList[2]).toEqual(createArray(11,15));
    expect(pagination.paginatedList[3]).toEqual([16,17]);
  });
});
