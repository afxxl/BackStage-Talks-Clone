var test = document.getElementById("test");

document.onscroll = function () {
  var scrollTop = window.scrollY; // Get the current scroll position
  test.innerHTML = scrollTop; // Show the scroll position in the "test" div
  var allDivs = document.getElementsByClassName("main"); // Select sections by their class

  for (var i = 0; i < allDivs.length; i++) {
    var curDiv = allDivs[i];

    // The code below makes the background color change when the scroll top passes
    // 2/3 of the previous div's height
    var heightBefore = 0;
    if (i > 0) {
      heightBefore = allDivs[i - 1].offsetHeight / 3; // Adjust for previous div's height
    }

    // Check if the scroll position has passed the threshold
    if (scrollTop >= curDiv.offsetTop - heightBefore) {
      var color = curDiv.getAttribute("data-color"); // Get the color from data attribute
      if (color) {
        document.body.style.background = color; // Change the background color
      }
    }
  }
};
