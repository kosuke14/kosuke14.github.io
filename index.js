$('.float-title').on('click', function() {
  $('.float-box').slideUp(300);

  var findElm = $(this).next(".float-box");

  if ($(this).hasClass('close')) {
    $(this).removeClass('close');
  } else {
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(300);
  }
});

$(window).on('load', function() {
  $('.float-opener li:first-of-type section').addClass("open");
  $(".open").each(function(index, element) {
    var Title = $(element).children('.float-title');
    $(Title).addClass('close');
    var Box = $(element).children('.float-box');
    $(Box).slideDown(300);
  });
});