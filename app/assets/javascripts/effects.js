// Background load

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
    collapseSpeed: 300 })
});
