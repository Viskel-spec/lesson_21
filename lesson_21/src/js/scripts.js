$('#offer-form').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    url: "mail.php",
    type: "POST",
    data: $(this).serialize(),
    success: function (data) {
      $('.success').text(data + '. ваша форма   отправлена.');
    }
  });
});



// Слайдер

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          centerMode: false
        }
      }
      
    ]
  });
});