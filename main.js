function showFormModal(subject) {
  $('#overlay').fadeIn(200,
    function() {
      $('#form_6 input[name="form"]').val(subject);
      $('#form_6')
          .css('display', 'block')
          .animate({
              opacity: 1,
              top: '50%'
          }, 400);
    });
}﻿

function showThanksModal() {
    $.fancybox.open({
        href: '#thank'
    });
}

function closeFormModal() {
  $('#form_6').animate({
      opacity: 0,
      top: '35%'
    },
    400,
    function() {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(200);
    }
  );
}

function closeThanksModal() {
  $.fancybox.close({
      href: '#thank'
  });
  /*$('#thank').animate({
      opacity: 0,
      top: '35%',
    },
    400,
    function() {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(200);
    }
  );*/
}

function initCalculator() {
    $('#slide_input').change(function() {
        var inp = parseInt($(this).val())
        var timing = 100
        $('#square_num').fadeOut(timing, function() {
            $(this).val(inp)
        }).fadeIn(timing);
        switch (inp) {
            case 5:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(1750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(4900).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(980).fadeIn(timing)
                break;
            case 6:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(2100).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(5880).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(1176).fadeIn(timing)
                break;
            case 7:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(2450).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(6860).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(1372).fadeIn(timing)
                break;
            case 8:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(2800).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(7840).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(1568).fadeIn(timing)
                break;
            case 9:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(3150).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(8820).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(1764).fadeIn(timing)
                break;
            case 10:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(3500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(9800).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(1960).fadeIn(timing)
                break;
            case 11:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(3850).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(10780).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(2156).fadeIn(timing)
                break;
            case 12:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(4200).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(11760).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(2352).fadeIn(timing)
                break;
            case 13:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(4500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(12740).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(2548).fadeIn(timing)
                break;
            case 14:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(4900).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(13720).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(2744).fadeIn(timing)
                break;
            case 15:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(5250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(14700).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(2940).fadeIn(timing)
                break;
            case 16:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(5500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(15650).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(3130).fadeIn(timing)
                break;
            case 17:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(5750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(16600).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(3320).fadeIn(timing)
                break;
            case 18:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(6000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(17550).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(3510).fadeIn(timing)
                break;
            case 19:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(6250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(18500).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(3700).fadeIn(timing)
                break;
            case 20:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(6500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(19450).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(3890).fadeIn(timing)
                break;
            case 21:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(6750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(20400).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(4080).fadeIn(timing)
                break;
            case 22:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(7000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(21350).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(4270).fadeIn(timing)
                break;
            case 23:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(7250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(22300).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(4460).fadeIn(timing)
                break;
            case 24:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(7500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(23250).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(4650).fadeIn(timing)
                break;
            case 25:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(7750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(24200).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(4840).fadeIn(timing)
                break;
            case 26:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(1750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(4900).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(980).fadeIn(timing)
                break;
            case 27:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(8250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(26100).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(5220).fadeIn(timing)
                break;
            case 28:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(8500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(27050).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(5410).fadeIn(timing)
                break;
            case 29:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(8750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(28000).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(5600).fadeIn(timing)
                break;
            case 30:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(9000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(28950).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(5790).fadeIn(timing)
                break;
            case 31:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(9250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(29900).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(5980).fadeIn(timing)
                break;
            case 32:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(9500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(30850).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(6170).fadeIn(timing)
                break;
            case 33:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(9750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(31800).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(6968).fadeIn(timing)
                break;
            case 34:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(10000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(32750).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(7164).fadeIn(timing)
                break;
            case 35:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(10250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(33700).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(7360).fadeIn(timing)
                break;
            case 36:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(10500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(34650).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(7556).fadeIn(timing)
                break;
            case 37:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(10750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(35600).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(7752).fadeIn(timing)
                break;
            case 38:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(11000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(36550).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(7948).fadeIn(timing)
                break;
            case 39:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(11250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(37500).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8144).fadeIn(timing)
                break;
            case 40:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(11500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(38450).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8340).fadeIn(timing)
                break;
            case 41:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(11750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(39400).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8536).fadeIn(timing)
                break;
            case 42:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(12000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(40350).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8732).fadeIn(timing)
                break;
            case 43:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(12250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(41300).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8928).fadeIn(timing)
                break;
            case 44:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(12500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(42250).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(9124).fadeIn(timing)
                break;

            case 45:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(12750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(43200).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(9320).fadeIn(timing)
                break;
            case 46:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(12250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(41300).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(8928).fadeIn(timing)
                break;
            case 47:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(13250).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(45100).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(9712).fadeIn(timing)
                break;
            case 48:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(13500).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(46050).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(9908).fadeIn(timing)
                break;
            case 49:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(13750).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(47000).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(10104).fadeIn(timing)
                break;
            case 50:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(14000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(47000).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(10300).fadeIn(timing)
                break;
            default:
                $('#sum_min').fadeOut(timing).wait(timing - 50).val(14000).fadeIn(timing)
                $('#sum_max').fadeOut(timing).wait(timing - 50).val(47000).fadeIn(timing)
                $('#discount').fadeOut(timing).wait(timing - 50).val(10300).fadeIn(timing)
        }
    });
}

function initForms() {

  $("#form_1").submit(function(e) { // перехватываем все при событии отправки
    var form = $(this); // запишем форму, чтобы потом не было проблем с this
    var data = form.serialize(); // подготавливаем данные
    $.ajax({ // инициализируем ajax запрос
      type: 'POST', // отправляем в POST формате, можно GET
      url: form.attr('action'), // путь до обработчика, у нас он лежит в той же папке
      dataType: 'json', // ответ ждем в json формате
      data: data, // данные для отправки
      beforeSend: function(data) { // событие до отправки
        form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
      },
      success: function(data) { // событие после удачного обращения к серверу и получения ответа
        if (data) {
          if (data.success) {
            showThanksModal(); //позволяет открыть модальное окно fancybox по завершению передачи данных
            $('#name_1, #tel_1').val('');
            closeFormModal();
          } else {
            alert(data['error']);
          }
        }
      },
      error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
        alert(xhr.status); // покажем ответ сервера
        alert(thrownError); // и текст ошибки
      },
      complete: function(data) { // событие после любого исхода
        form.find('input[type="submit"]').removeAttr('disabled');
      }
    });
    e.preventDefault();
  });


  $("#form_2").submit(function(e) { // перехватываем все при событии отправки
    var form = $(this); // запишем форму, чтобы потом не было проблем с this

    var data = form.serialize(); // подготавливаем данные
    $.ajax({ // инициализируем ajax запрос
      type: 'POST', // отправляем в POST формате, можно GET
      url: form.attr('action'), // путь до обработчика, у нас он лежит в той же папке
      dataType: 'json', // ответ ждем в json формате
      data: data, // данные для отправки
      beforeSend: function(data) { // событие до отправки
          form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
      },
      success: function(data) { // событие после удачного обращения к серверу и получения ответа
        if (data) {
          if (data.success) {
            showThanksModal(); //позволяет открыть модальное окно fancybox по завершению передачи данных
            $('#name_1, #tel_1').val('');
            closeFormModal();
          } else {
            alert(data['error']);
          }
        }
      },
      error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
          alert(xhr.status); // покажем ответ сервера
          alert(thrownError); // и текст ошибки
      },
      complete: function(data) { // событие после любого исхода
          form.find('input[type="submit"]').removeAttr('disabled');
      }
    });
    e.preventDefault();
  });


    $("#form_3").submit(function(e) { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this

        var data = form.serialize(); // подготавливаем данные
        $.ajax({ // инициализируем ajax запрос
            type: 'POST', // отправляем в POST формате, можно GET
            url: form.attr('action'), // путь до обработчика, у нас он лежит в той же папке
            dataType: 'json', // ответ ждем в json формате
            data: data, // данные для отправки
            beforeSend: function(data) { // событие до отправки
                form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
            },
            success: function(data) { // событие после удачного обращения к серверу и получения ответа
              if (data) {
                if (data.success) {
                  showThanksModal(); //позволяет открыть модальное окно fancybox по завершению передачи данных
                  $('#name_3, #tel_3, #text_3').val('');
                  closeFormModal();
                } else {
                  alert(data['error']);
                }
              }
            },
            error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                alert(xhr.status); // покажем ответ сервера
                alert(thrownError); // и текст ошибки
            },
            complete: function(data) { // событие после любого исхода
                form.find('input[type="submit"]').removeAttr('disabled');
            }

        });
        e.preventDefault();
    });


    $("#form_5").submit(function(e) { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет

        var data = form.serialize(); // подготавливаем данные
        $.ajax({ // инициализируем ajax запрос
            type: 'POST', // отправляем в POST формате, можно GET
            url: form.attr('action'), // путь до обработчика, у нас он лежит в той же папке
            dataType: 'json', // ответ ждем в json формате
            data: data, // данные для отправки
            beforeSend: function(data) { // событие до отправки
                form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
            },
            success: function(data) { // событие после удачного обращения к серверу и получения ответа
              if (data) {
                if (data.success) {
                  showThanksModal(); //позволяет открыть модальное окно fancybox по завершению передачи данных
                  $('#name_5, #tel_5').val('');
                  closeFormModal();
                } else {
                  alert(data['error']);
                }
              }
            },
            error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                alert(xhr.status); // покажем ответ сервера
                alert(thrownError); // и текст ошибки
            },
            complete: function(data) { // событие после любого исхода
                form.find('input[type="submit"]').removeAttr('disabled');
            }

        });
        e.preventDefault();
    });


  /**
   * Перезвон
   */
  $("#form_6").submit(function(e) { // перехватываем все при событии отправки
    var form = $(this); // запишем форму, чтобы потом не было проблем с this
    var data = form.serialize(); // подготавливаем данные
    $.ajax({ // инициализируем ajax запрос
      type: 'POST', // отправляем в POST формате, можно GET
      url: form.attr('action'), // путь до обработчика, у нас он лежит в той же папке
      dataType: 'json', // ответ ждем в json формате
      data: data, // данные для отправки
      beforeSend: function(data) { // событие до отправки
        form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
      },
      success: function(data) { // событие после удачного обращения к серверу и получения ответа
        if (data) {
          if (data.success) {
            showThanksModal(); //позволяет открыть модальное окно fancybox по завершению передачи данных
            $('#name_6, #tel_6').val('');
            closeFormModal();
          } else {
            alert(data['error']);
          }
        }
      },
      error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
        alert(xhr.status); // покажем ответ сервера
        alert(thrownError); // и текст ошибки
      },
      complete: function(data) { // событие после любого исхода
        form.find('input[type="submit"]').removeAttr('disabled');
      }
    });
    e.preventDefault();
  });
}

function initTimer() {
  var austDay = new Date(2016, 04, 10);
  $('#timer').countdown({
    until: austDay,
    padZeroes: true
  });
}

$(document).ready(function() {
    initCalculator();
    initForms();
    initTimer();
    
    $('#thanks__close').click(function() {
      closeThanksModal();
    });

    $('input[type="range"]').rangeslider({
        polyfill: false
    });
    //    mask
    $('.tel').mask("+7 (999) 999 99 99");
    //    description
    $('.type>span').click(function() {
        var hover = $(this);
        $('.desc_show').wait(500).removeClass('desc_show').wait(500).css('display', 'none')
        if (hover.siblings('.desc').hasClass('desc_show')) {
            hover.siblings('.desc').wait(500).css('display', 'none')
            hover.siblings('.desc').removeClass('desc_show')
        } else {
            hover.siblings('.desc').css('display', 'block');
            hover.siblings('.desc').wait(1).addClass('desc_show')
        }
    });
    $('.desc .cls_desc').click(function() {
        $(this).parent('.desc').removeClass('desc_show').wait(500).css('display', 'none')
    })
    //    slider
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        slide: $('img'),

    });

    $('.tabs').click(function() {
        var number = $(this).data('number');
        $('.slider').slick('slickGoTo', number, false);
    })
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.tabs_active').removeClass('tabs_active')
        $('.tabs').eq(currentSlide).addClass('tabs_active');
        $('.price').fadeOut(300)
        $('.price_' + (currentSlide + 1)).fadeIn(300)
    });
    //fancybox
    $(".fancy").fancybox({
        maxWidth: '90%',
        maxHeight: '90%',
        fitToView: false,
        autoSize: false,
        closeClick: true,
        openEffect: 'fade',
        closeEffect: 'none'
    });
    $('.video')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect: 'none',
            closeEffect: 'fade',
            prevEffect: 'none',
            nextEffect: 'none',
            arrows: false,
            helpers: {
                media: {},
                buttons: {}
            }
        });
    //    pop_ups

    /**
     * Открытие модального окна с темой data-subject="example"
     */
    $('.open').click(function(e) {
        e.preventDefault();
        var subject = $(this).attr('data-subject');
        showFormModal(subject);
    });
    $('#overlay, .cls').click(function() {
        closeFormModal();
        closeThanksModal();
    });
    //send_letter
});