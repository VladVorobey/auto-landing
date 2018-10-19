import $ from 'jquery';
import Swiper from 'swiper';
import slick from 'slick-carousel';
import '../../node_modules/jquery-popup-overlay/jquery.popupoverlay';
import '../../node_modules/jquery-validation/dist/jquery.validate.min';

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
var swiperReviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 2,
  spaceBetween: 75,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
$(document).ready(function() {
  //---- NAV-ADAPTIV ----
  $('.nav__button, .nav ul li a').click(function() {
    $('.nav').toggleClass('active'),
    $('.nav ul').toggleClass('active'),
    $('.nav .info-line__button').toggleClass('active'),
    $('.nav__button').toggleClass('active');
  });
  //---- ANCHOR ----
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });
  //---- URGENT-SLIDER ----
  $('.urgent__slider').slick({
    infinite: true,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
  //---- CLIENTS-SLIDER ----
  $('.clients__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true
  });
  $('.reviews__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true
  });
  //---- TABS ----
  $('.buy-auto__tabs_content .buy-auto__tabs_item').not(':first').hide();
  $('.buy-auto__tabs_nav .buy-auto__tabs_tab').click(function() {
    $('.buy-auto__tabs_nav .buy-auto__tabs_tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.buy-auto__tabs_content .buy-auto__tabs_item').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('active');
  //---- TABS ----
  $('.pay-system__tabs_content .pay-system__tabs_item').not(':first').hide();
  $('.pay-system__tabs_nav .pay-system__tabs_tab').click(function() {
    $('.pay-system__tabs_nav .pay-system__tabs_tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.pay-system__tabs_content .pay-system__tabs_item').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('active');
  //---- TABS ----
  $('.faq__tabs_content .faq__tabs_item').not(':first').hide();
  $('.faq__tabs_nav .faq__tabs_tab').click(function() {
    $('.faq__tabs_nav .faq__tabs_tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.faq__tabs_content .faq__tabs_item').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('active');
  //---- DROP-FAQ ----
  $('.faq__head').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    }
    else {
      $('.faq__head').removeClass('active');
      $(this).addClass('active');
    }
    $('.faq__toggle').addClass('.faq__toggle_active');
    $(this).next().slideToggle();
    $('.faq__toggle').not($(this).next()).slideUp();
  });
  $('.modal').popup({
    transition: 'all 0.3s',
    outline: true, // optional
    focusdelay: 400, // optional
    vertical: 'top', //optional
    // onclose: function() {
    //   $(this).find('label.error').remove();
    // }
  });
  //---- FORM ----
  // $('.form').each(function(index, el) {
  //   $(el).addClass('form-' + index);
  //
  //   $('.form-' + index).validate({
  //     rules: {
  //       name: 'required',
  //       email: 'required',
  //       textarea: 'required'
  //     },
  //     messages: {
  //       name: 'Введите Ваше имя',
  //       email: 'Введите Ваш email',
  //       textarea: 'Задайте Ваш вопрос'
  //     },
  //     submitHandler: function(form) {
  //       var t = $('.form-' + index).serialize();
  //       ajaxSend('.form-' + index, t);
  //     }
  //   });
  //  });
  // function ajaxSend(formName, data) {
  //   jQuery.ajax({
  //     type: 'POST',
  //     url: '/wp-content/themes/hostels/sendmail.php',
  //     data: data,
  //     success: function() {
  //       $('.modal').popup('hide');
  //       $('#thanks').popup('show');
  //       setTimeout(function() {
  //         $(formName).trigger('reset');
  //       }, 2000);
  //     }
  //   });
  // };
});
