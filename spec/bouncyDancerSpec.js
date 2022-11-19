describe('bouncyDancer', function() {

  var bouncyDancer;
  beforeEach(function() {
    bouncyDancer = new makeBouncyDancer(10, 20, 100);
  });

  it('should move back and forth', function() {
    console.log(bouncyDancer.$node[0].classList[2]);
    expect(bouncyDancer.$node[0].classList[2]).to.equal('x');
  });

  it('should move back and forth on the screen after lineup', function() {
    var topBefore = bouncyDancer.top;
    $('.lineUpButton').click();
    expect(bouncyDancer.top).to.not.equal(topBefore);
  });

  it('should have a class name of bouncy', function() {
    console.log(bouncyDancer.$node[0].classList[2]);
    expect(bouncyDancer.$node[0].classList[1]).to.equal('bouncy');
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
