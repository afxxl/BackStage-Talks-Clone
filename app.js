var test = document.getElementById("test");

document.onscroll = function () {
  var scrollTop = window.scrollY;
  test.innerHTML = scrollTop;
  var allDivs = document.getElementsByClassName("main");
  for (var i = 0; i < allDivs.length; i++) {
    var curDiv = allDivs[i];

    var heightBefore = 0;
    if (i > 0) {
      heightBefore = allDivs[i - 1].offsetHeight / 3;
    }

    if (scrollTop >= curDiv.offsetTop - heightBefore) {
      var color = curDiv.getAttribute("data-color");
      if (color) {
        document.body.style.background = color;
      }
    }
  }
};
