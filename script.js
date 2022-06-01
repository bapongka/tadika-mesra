$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(window).scrollTop() > 800) {
      $("header").addClass("solid");
    } else {
      $("header").removeClass("solid");
    }
  });
});
