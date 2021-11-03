// set vars
var slider = $('#slider');
var filterButtons = $('.filterButtons');

function flicitySlider() {
  //init flickity
  slider.flickity({
    contain: true,
    imagesLoaded: true,
    cellAlign: 'left',
    cellSelector: '.flickity'
  });
}

flicitySlider();

//bind next to next button
slider.parent().find('.slider-next').on('click', function() {
  slider.flickity('next');
});

//bind previous to previous button
slider.parent().find('.slider-prev').on('click',function() {
  slider.flickity('previous');
});

//when filter buttons clicked
filterButtons.on( 'click', 'button', function() {
  //use data-filter attribute & class for filtering 
  var filterValue = $( this ).attr('data-filter');
  var slide = slider.find('.slide');

  if (filterValue == 'all') {
    // if all show all
    slide.fadeIn(450);
    slide.addClass('flickity');
  } else {
    //set active slide
    var active = $('.' + filterValue).fadeIn(450);
    // show only slide with the same class as the button "attr('data-filter')"
    slide.addClass('flickity');
    slide.not(active).removeClass('flickity');
    slide.not(active).hide();
  }

  // destroy slider so we can rebuild with new filters
  slider.flickity('destroy');

  //rebuild slider with new images
  flicitySlider();
  
  // remove active class from all buttons
  $('.filterButton').removeClass('active');
  
  // add active class to active button
  $(this).addClass('active');
  
});