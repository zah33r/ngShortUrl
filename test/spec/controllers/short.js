'use strict';

describe('Controller: ShortCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var ShortCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortCtrl = $controller('ShortCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShortCtrl.awesomeThings.length).toBe(3);
  });
});
