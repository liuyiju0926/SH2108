$(function () {
  // Anchor
  $('.anchor').on('click', function () {
    var goto = $(this).data('href')
    if ($(goto).offset() != undefined) {
      $('html, body').removeClass('active').stop().animate({
        scrollTop: $(goto).offset().top
      }, 800)
    }
    return false
  })

  // GoTop
  $('#gotopBtn').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    })
    return false
  })

  // Scroll
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('#gotopBtn').stop().css({
        'transform': 'scale(1)'
      });

    } else {
      $('#gotopBtn').stop().css({
        'transform': 'scale(0)'
      });
    }
  }).scroll()

  //banner slider
  $('.banner_slider').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000
  })

  //md3 slider
  $('.md3_slider').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: [$('.am-prev'), $('.am-next')],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
  })

  //QA toggle
  $('.md4_box').on('click', function () {
    $(this).toggleClass('box_active')
    return false;
  })

  //video popup
  $('.md2_box .box').on('click', function () {
    let video = $(this).data('video');
    console.log(video);
    let videoSrc = $('#myVideo');
    videoSrc[0].attributes[1].nodeValue = 'video/' + video;
    // console.log(test[0].attributes[1].nodeValue);
    $('.video').fadeIn(500).css('display', 'block');

  })

  //video close
  $('.close').on('click', function () {
    $('.video').fadeOut(500).css('display', 'none');
    let videoSrc = $('#myVideo');
    videoSrc[0].attributes[1].nodeValue = '';
  })
})