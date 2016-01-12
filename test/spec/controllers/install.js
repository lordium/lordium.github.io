'use strict';

describe('Controller: InstallCtrl', function () {

  // load the controller's module
  beforeEach(module('lordiumApp'));

  var InstallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstallCtrl = $controller('InstallCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InstallCtrl.awesomeThings.length).toBe(3);
  });
});
