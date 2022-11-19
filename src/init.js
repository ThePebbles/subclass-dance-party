$(document).ready(function() {
  window.dancers = [];

  setInterval(function() {
    var blinkyElements = document.getElementsByClassName('blinky');
    if (blinkyElements[0]) {
      var isVisible = $(blinkyElements[0]).css('display');
      isVisible = !(isVisible === 'none' || isVisible === undefined);
      if (isVisible) {
        for (var i = 0; i < blinkyElements.length; i++) {
          blinkyElements[i].style.display = 'none';
        }
        //make blinky elements have css display none
      } else {
        for (var i = 0; i < blinkyElements.length; i++) {
          blinkyElements[i].style.display = 'unset';
        }
        //set display to unset,
      }
    }
  }, 1000);

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var left;
      if (i % 2 === 0) {
        left = 705.288;
      } else {
        left = 450.2;
      }
      if (window.dancers[i].$node[0].classList.contains('spinny')) {
        left -= 50;
      }
      var styleSettings = {
        left: left
      };
      window.dancers[i].$node.css(styleSettings);
    }
  });

  $('.resetButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var top = $('body').height() * Math.random();
      var left = $('body').width() * Math.random();
      var styleSettings = {
        top: top,
        left: left
      };
      window.dancers[i].$node.css(styleSettings);
    }
  });


  $('.PacMan').on('click', function() {
    var bouncyElements = [];
    var blinkyElements = [];
    console.log(window.dancers[0].top);
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node[0].classList.contains('blinky')) {
        blinkyElements.push(window.dancers[i]);
      }
      if (window.dancers[i].$node[0].classList.contains('bouncy')) {
        bouncyElements.push(window.dancers[i]);
      }
    }
    var distance1 = undefined;
    var closest = undefined;
    for (var i = 0; i < blinkyElements.length; i++) {
      for (var j = 0; j < bouncyElements.length; j++) {
        console.log(blinkyElements, bouncyElements);
        var topDif = Math.abs(blinkyElements[i].top - bouncyElements[j].top);
        var leftDif = Math.abs(blinkyElements[i].left - bouncyElements[j].left);
        var distance = Math.sqrt(Math.pow(topDif, 2) + Math.pow(leftDif, 2));
        if ((!distance1 && !closest) || distance < distance1) {
          console.log('inside if statement');
          distance1 = distance;
          closest = bouncyElements[j];
        }
      }
      blinkyElements[i].setPosition(closest.top + 50, blinkyElements[i].left);
      distance1 = undefined;
      closest = undefined;
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

