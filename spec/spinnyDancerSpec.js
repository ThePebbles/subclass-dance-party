describe('spinny', function() {

  var spinnyDancer;
  beforeEach(function() {
    spinnyDancer = new makeSpinnyDancer(10, 20, 100);
  });

  it('should move back and forth', function() {
    console.log(spinnyDancer.$node[0].classList[2]);
    expect(spinnyDancer.$node[0].classList[1]).to.equal('spinny');
  });

  it('should be an object', function() {
    expect(typeof spinnyDancer).to.equal('object');
  });

  it('should have a class name of spinny', function() {
    console.log(spinnyDancer.$node[0].classList[2]);
    expect(spinnyDancer.$node[0].classList[1]).to.equal('spinny');
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
