$(document).ready(() => {
  //Modal popup
  if ($(".modais").length) {
    $(".modais").iziModal({
      history: false,
      iframe: true,
      fullscreen: false,
      headerColor: '#000000',
      loop: false,
      autoOpen: false,
      openFullscreen: false,
      closeButton: true,
      overlayColor: 'rgba(0, 0, 0, 0.75)',
      padding: 15,
      width: 800,
      iframeHeight: 500,
    });
  }

  //logo slider
  $('.logo-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinte: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
          verticalSwiping: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: '50px',
          vertical: false,
          verticalSwiping: false,
        }
      },
    ]
  })

  //SysAdmin Tech Slider
  $('.sysadmin-techs').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    infinte: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: '50px',
        }
      },
    ]
  });

  //Home testimonial slider
  $('.testimonial-wrapper').slick({
    adaptiveHeight: true,
    autoplaySpeed: 9000,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinte: true,
    autoplay: false,
    fade: true,
    swipeToSlide: true,
  });

  // inner testimonials
  $('.page-testimonial').slick({
    adaptiveHeight: true,
    autoplaySpeed: 8000,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinte: true,
    autoplay: false,
  });

  //SysAdmin slider
  $('.sysadmin-slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    dots: false,
    autoplay: false,
    asNavFor: '.sysadmin-box-info',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          autoplay: false,
        }
      },
    ]
  });
  $('.sysadmin-box-info').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    dots: false,
    asNavFor: '.sysadmin-slider-img',
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          // centerMode: true,
          // centerPadding: '20px',
          vertical: true,
          verticalSwiping: false,
          adaptiveHeight: true,
          arrow: false,
          autoplay: false,
        }
      },
    ]
  });

  // jobs slider
  $('.jobs-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrow: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // team slider
  $('.team-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 2,
    arrow: false,
    dots: false,
    lazyLoad: 'progressive',
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }
    ]
  });

  // candidate slider
  $('.candidate-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
        }
      }
    ]
  });

  // sticky sidebar
  $('.job-sidebar').stickySidebar({
    topSpacing: 100,
    bottomSpacing: 0,
    containerSelector: '.sticky-sidebar',
    innerWrapperSelector: '.sidebar__inner',
  });

  // Location map toggle
  $('.address-wrapper .location').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.address-wrapper .location').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  //smooth scroll
  $('.scroll_link').on('click', function (e) {
    e.preventDefault()

    $('.header').addClass('headerHide');
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 50,
      },
      500,
      'linear',
      function () {
        setTimeout(function () {
          $('.header').removeClass('headroom--pinned').addClass('headroom--unpinned').removeClass('headerHide');
        }, 0);
      }
    )
  })

  // toggle mobile menu
  $('.mobile-menu-btn').on('click', function () {
    $('#mobile-navigation').toggleClass('toggle-menu');
    $('header').toggleClass('collapse-menu');
  });

  // sticky header
  $('header').headroom({
    "offset": 10,
    "tolerance": 5,
    classes: {
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      initial: "animated"
    },
    onPin: function () {
      $('header').addClass('headroom--not-top')
    }
  });

  //AOS transition effects
  AOS.init({
    duration: 800,
  });

  //check if has class
  $("header").click(function () {
    if ($(this).hasClass('collapse-menu')) {
      $('body').addClass('stop-scroll');
    } else {
      $('body').removeClass('stop-scroll');
    }
  });

  //remove flash message
  setTimeout(function () {
    $('.alert').addClass('flash-mess-fadeout');
  }, 5000);

  //Text length check
   $('.card-testimonial-content').each(function() {
    if ( $(this).height() >= 72) {
      // $(this).closest('article').css({'overflow': 'hidden'});
      $(this).closest('.card-testimonial').find('.testimonial-readmore').removeClass('d-none');
    } else {
      $(this).closest('.card-testimonial').find('.testimonial-readmore').addClass('d-none');
    }
   });
});

//getYear
const currentDate = new Date();
const getYearDate = currentDate.getFullYear();
document.getElementById('getYear').innerHTML = getYearDate;

function checkGdprCookie() {
  if (!Cookies.get('is_gdpr_ibw_accepted') || JSON.parse(Cookies.get('is_gdpr_ibw_accepted')) === null) {
    $('#cookieModal').modal({
      backdrop: 'static',
      keyboard: false
    });
  }
}

$(window).on('load', function () {
  checkGdprCookie();
  $(document).on('click', '.accept-gdpr', function () {
    document.cookie = "is_gdpr_ibw_accepted=1; path=/";
    $('#cookieModal').modal('hide');
  });

  if (window.scrollY == 0) {
    $('header').addClass('menu-show-transparent');
  } else {
    $('header').removeClass('menu-show-transparent').addClass('menu-show');
  }

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (window.scrollY == 0) {
      $('header').addClass('menu-show-transparent');
    } else {
      $('header').removeClass('menu-show-transparent').addClass('menu-show');
    }
  });

  $('.animate-box-bottom').css({'transform': 'translate(0%, -100%) translate3d(0px, 0px, 0px)'});

  var TxtTypeInitialized = [];
  // Text animation
  $('#hero-slider').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
    setTimeout(function () {
      if (!TxtTypeInitialized[0]) {
        var element = $(".slick-current").find('.typewrite');
        var toRotate = element.data('type');
        var period = element.data('period');
        if (toRotate) {
          TxtTypeInitialized[0] = new TxtType(element, toRotate, period);
        }
      } else {
        TxtTypeInitialized[0].reset();
      }
    }, 500);
  });
  $('#hero-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
  });
  $('#hero-slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
    setTimeout(function () {
      if (!TxtTypeInitialized[currentSlide]) {
        var element = $(".slick-current").find('.typewrite');
        var toRotate = element.data('type');
        var period = element.data('period');
        if (toRotate) {
          TxtTypeInitialized[currentSlide] = new TxtType(element, toRotate, period);
        }
      } else {
        TxtTypeInitialized[currentSlide].reset();
      }
    }, 500);
  });

  $('#hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: true
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
        });
    });
  }
});

$(window).on("orientationchange", function (event) {
  $('#mobile-navigation').removeClass('toggle-menu');
  $('header').removeClass('collapse-menu');
  $('body').removeClass('stop-scroll');
  $('.mobile-menu-btn').removeClass('is-active');
});

// hamburger animation
var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}

//input upload count
var inputs = document.querySelectorAll('#apply_attachFile');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {
    var fileName = '';
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    } else {
      fileName = e.target.value.split('\\').pop();
    }
    if (fileName)
      label.querySelector('span').innerHTML = fileName;
    else
      label.innerHTML = labelVal;
  });
});


//Typewriter
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;

  this.reset = function() {
    this.loopNum = 0;
    this.isDeleting = false;
    this.txt = '';
    this.tick();
  }
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.html('<span class="wrap">'+this.txt+'</span>');

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 4;}

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 300;
  }

  if (this.txt !== '' || this.isDeleting !== false | i !== (this.toRotate.length - 1)) {
    setTimeout(function tickFunc() {that.tick() }, delta);
  };
}

  window.onload = function() {
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  document.body.appendChild(css);
};