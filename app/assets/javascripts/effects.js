$(document).ready(function() {
  $('img').fadeIn(2000);
  $('#tldr, #background, #technologies, #goals').expander({
    showWordCount: false,
    preserveWords: true,
    slicePoint: 140,
    expandText: 'More',
    expandPrefix: '&hellip; ',
    expandEffect: 'fadeIn',
    expandSpeed: 700,
    userCollapseText: 'Less',
    userCollapsePrefix: ' ',
    collapseEffect: 'fadeOut',
    collapseSpeed: 300 });


  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  // $("body").on("click", "#btn-submit", function(event) {
  //   var $button = $("#btn-submit");
  //   $button.prop("disabled", true);
  //   setTimeout(function(){
  //     $button.prop("disabled", false);
  //   }, 2000);
  // });

});
