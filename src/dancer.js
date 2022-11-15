var makeDancer = function(top, left, timeBetweenSteps) {
  var dancer = Object.create(makeDancer.prototype);
  this.timeBetweenSteps = timeBetweenSteps;
  dancer.$node = $('<span class="dancer"></span>');
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function() {
  setTimeout(this, this.timeBetweenSteps);
};