// Fastclick
window.addEventListener('load', function(){ FastClick.attach(document.body); }, false);

jQuery(document).ready(function($){

  // mobile nav trigger
  $(document).on('click', '[data-toggle="mobile-menu"]', function(e){
    $('body').toggleClass('mobile-nav-visible');
  });
  $(document).on('click touchup', '.mobile-nav-visible .nav-slide-element', function(e){
    $('body').removeClass('mobile-nav-visible');
  });

});