describe('bouncyDancer', function() {
  //should move back and forth on the page
  //should move back and forth after lineup button is pressed
  //should a node object
  var bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
