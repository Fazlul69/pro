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

// part 2 /////



// set vars
var slider2 = $('#slider2');
var filterButtons2 = $('.filterButtons2');

function flicitySlider2() {
  //init flickity
  slider2.flickity({
    contain: true,
    imagesLoaded: true,
    cellAlign: 'left',
    cellSelector: '.flickity'
  });
}

flicitySlider2();

//bind next to next button
slider2.parent().find('.slider-next').on('click', function() {
  slider2.flickity('next');
});

//bind previous to previous button
slider2.parent().find('.slider-prev').on('click',function() {
  slider2.flickity('previous');
});

//when filter buttons clicked
filterButtons2.on( 'click', 'button', function() {
  //use data-filter attribute & class for filtering 
  var filterValue = $( this ).attr('data-filter');
  var slide2 = slider2.find('.slide2');

  if (filterValue == 'dall') {
    // if all show all
    slide2.fadeIn(450);
    slide2.addClass('flickity');
  } else {
    //set active slide
    var active = $('.' + filterValue).fadeIn(450);
    // show only slide with the same class as the button "attr('data-filter')"
    slide2.addClass('flickity');
    slide2.not(active).removeClass('flickity');
    slide2.not(active).hide();
  }

  // destroy slider so we can rebuild with new filters
  slider2.flickity('destroy');

  //rebuild slider with new images
  flicitySlider2();
  
  // remove active class from all buttons
  $('.filterButton2').removeClass('active');
  
  // add active class to active button
  $(this).addClass('active');
  
});

// part 3



// set vars
var slider3 = $('#slider3');
var filterButtons3 = $('.filterButtons3');

function flicitySlider3() {
  //init flickity
  slider3.flickity({
    contain: true,
    imagesLoaded: true,
    cellAlign: 'left',
    cellSelector: '.flickity'
  });
}

flicitySlider3();

//bind next to next button
slider3.parent().find('.slider-next').on('click', function() {
  slider3.flickity('next');
});

//bind previous to previous button
slider3.parent().find('.slider-prev').on('click',function() {
  slider3.flickity('previous');
});

//when filter buttons clicked
filterButtons3.on( 'click', 'button', function() {
  //use data-filter attribute & class for filtering 
  var filterValue = $( this ).attr('data-filter');
  var slide3 = slider3.find('.slide3');

  if (filterValue == 'mall') {
    // if all show all
    slide3.fadeIn(450);
    slide3.addClass('flickity');
  } else {
    //set active slide
    var active = $('.' + filterValue).fadeIn(450);
    // show only slide with the same class as the button "attr('data-filter')"
    slide3.addClass('flickity');
    slide3.not(active).removeClass('flickity');
    slide3.not(active).hide();
  }

  // destroy slider so we can rebuild with new filters
  slider3.flickity('destroy');

  //rebuild slider with new images
  flicitySlider3();
  
  // remove active class from all buttons
  $('.filterButton3').removeClass('active');
  
  // add active class to active button
  $(this).addClass('active');
  
});

