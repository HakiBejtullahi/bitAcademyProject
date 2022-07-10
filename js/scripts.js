// Document Ready
$(document).ready(function () {
  $('.about-carosel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.next-btn',
    prevArrow: '.prev-btn',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

const dropDownItems = document.querySelectorAll('.dropdown-item');

dropDownItems.forEach(function (link) {
  link.addEventListener('click', function (btn) {
    dropDownItems.forEach(function (item) {
      if (item !== link) {
        item.classList.remove('active');
      }
    });
  });
});
