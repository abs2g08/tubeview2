'use strict';

describe('Service: tabmanager', function () {

  // load the service's module
  beforeEach(module('tubeview2App'));

  // instantiate service
  var tabmanager;
  beforeEach(inject(function (tabManager) {
    tabmanager = tabManager;
  }));

  it('should create 2 tabs', function () {
    tabmanager.createTab({ name: 'tab1', '$$hashKey' : '1' });
    tabmanager.createTab({ name: 'tab2', '$$hashKey' : '2' });

    expect(tabmanager.tabs.length).toBe(2);
  });

  it('should remove two tabs', function () {
    var tab1 = { name: 'tab1', '$$hashKey' : '1' };
    tabmanager.createTab(tab1);
    tabmanager.createTab({ name: 'tab2', '$$hashKey' : '2' });

    expect(tabmanager.tabs.length).toBe(2);

    tabmanager.close(tab1);
    expect(tabmanager.tabs[0].name).toBe('tab2');
  });
});
