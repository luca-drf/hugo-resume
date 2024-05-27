(function($) {
  "use strict"; // Start of use strict

  // Tweaks img fitting based on layout
  $('.resp-container').find('img').each(function(){
    var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
    $(this).addClass(imgClass);
   })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
