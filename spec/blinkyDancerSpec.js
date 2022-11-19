describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be an object', function() {
    expect(typeof blinkyDancer).to.equal('object');
  });

  it('should have a class name of blinky', function() {
    console.log(blinkyDancer.$node[0].classList[2]);
    expect(blinkyDancer.$node[0].classList[1]).to.equal('blinky');
  });
});
