$('.btn').click(function() {
  var html = $('.main p').html();
  $('h1').html(html);


});
$('.main h2').hover(
  function(){
    $('.main p').fadeIn();
  },
  function(){
    $('.main p').fadeOut();
  }
)

$('.header-logo p').hover(
  function(){
    $('.header-menu').fadeIn();
  },
  function(){
    $('.header-menu').fadeOut();
  }
)

$('.login').click(function(){
  $('#login-modal').fadeIn();
});
