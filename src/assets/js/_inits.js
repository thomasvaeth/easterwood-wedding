// ----------------------------------------------
// Imports
// ----------------------------------------------

// ----------------------------------------------
// Inits
// ----------------------------------------------
$(() => {

  const count = $('.images').children().length;
  let random;

  $('.overlay__subcontainer').mouseenter(() => {
    $('.images').children().removeClass('js-visible');

    random = Math.floor(Math.random() * count);

    $('.images').children().eq(random).addClass('js-visible');
  });

  // $('.overlay__subcontainer').mouseleave(() => {
  //   $('.images').children().eq(random).removeClass('js-visible');
  // });
});
