console.log('test.js is running also')

const $ = require('jquery');

$('.js-nav-trigger').on('click', function(e) {
  e.preventDefault();
  $(this).parent().parent().toggleClass('state-active');
});

$('.js-menu-item-trigger').on('click', function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('state-active');
});
