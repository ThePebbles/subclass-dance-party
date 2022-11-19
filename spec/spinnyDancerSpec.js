describe('spinny', function() {
  //write a test to check for spinning
  //write a test to check for square shape
  //should have node object
  var spinnyDancer = new makeSpinnyDancer(10, 20, timeBetweenSteps);
  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
