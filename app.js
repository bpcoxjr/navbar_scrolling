$(document).ready(function() {
  console.log('ready');

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('#nav-bar').outerHeight();

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 50);

  function hasScrolled() {
    var scrollTop = $(window).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - scrollTop) <= delta)
      return;

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
      $('#nav-bar').removeClass('nav-bar-down').addClass('nav-bar-up');
    } else if (scrollTop + $(window).height() < $(document).height()) {
      $('#nav-bar').removeClass('nav-bar-up').addClass('nav-bar-down');
    }

    lastScrollTop = scrollTop;
  }

});
