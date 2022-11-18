var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  console.log(this.setPosition);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  //this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// makeDancer.prototype.step = function() {
//   var context = this;
//   setTimeout(function() {
//     context.step();
//   }, context.timeBetweenSteps);
// };