'use strict';

describe('Component: ControlComponent', function() {
  // load the controller's module
  beforeEach(module('sklepixApp.control'));

  var ControlComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ControlComponent = $componentController('control', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
