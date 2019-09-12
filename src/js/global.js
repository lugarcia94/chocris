
$(document).ready(function(){
    
    var categoryName = Fbits.Categoria.Nome;
    if (categoryName) {
      $('.category__name > span').append(categoryName);
    }

    if ($('.product__offer .product__boleto .details-content').length){
      const str = $('.product__offer .product__boleto .details-content').text();
      const i = str.indexOf("(");
      const f = str.indexOf(")");
      const v = str.indexOf("R$");
      const resultado = str.substring(i, (f+1));
      const vlrDe = parseFloat($('.product__offer #divFormaPagamento .precoPor').text().substring(3).replace('.','').replace(',','.'));
      const vlrDesc = parseFloat(str.substring((v+2), i).replace('.','').replace(',','.'));
      if((vlrDe - vlrDesc) > 0){
        $('.product__offer .product__boleto').append('<div class="product__economy">' + 'Economia de <span>' + (vlrDe - vlrDesc).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</span> ' + resultado + '</div>');
      }
    };

    $('.footer__title').on('click', function(){
      $(this).parent().toggleClass('active__footer');
    });

    $('.headerSearch').on('click', function(e){
        var element = e.target;  
        $(this).addClass('active__search'); 
    });
 
    
    if( $(".category__products >span").length){
      $(".category__products >span").append("<div class='fbits-item-lista-spot fbits-item-lista-spot-empty'></div>")
      $(".category__products >span").append("<div class='fbits-item-lista-spot fbits-item-lista-spot-empty'></div>")
      $(".category__products >span").append("<div class='fbits-item-lista-spot fbits-item-lista-spot-empty'></div>")
    }

    $('.short__description a').on('click', function(e) {
      e.preventDefault();
      var id = $(".descricao__produto"),
      targetOffset = $(id).offset().top;
          
      $('html, body').animate({ 
          scrollTop: targetOffset - 120
      }, 500);
    });  

    $(".newsletter-box input#Nome").attr("placeholder", "Seu nome aqui");
    $(".newsletter-box input#Email").attr("placeholder", "Seu e-mail aqui");

    $( ".category__btn-mobile" ).click(function() {
      $('body').addClass('filter__open');
    });

    $( ".category__filter-close" ).click(function() {
      $('body').removeClass('filter__open');
    });

    $( ".header__mainbar-mobile" ).click(function() {
      $('body').addClass('menu__open');
    });
    
    $( ".header__mainbar-mobile-close" ).click(function() {
      $('body').removeClass('menu__open');
    });

    $('body').addClass('active__body');

    $( document ).ajaxComplete(function() {
        if(jQuery('.minicart-qtde-itens').is(':empty')) {
            jQuery('.minicart-qtde-itens').append('0');
        }
    });

    $('.header__navbar-wrapper .menu >li').each(function(){
        var list = $(this).find('>ul').html();

        if($(this).find('>ul').length){
            $(this).append('<div class="menu__dropdow"><div><ul class="menu__list"> ' + list);
            $(this).find('>ul').remove();

            if($(this).find('>a img').length){
                $(this).find('.menu__dropdow').append('<div class="menu__image"><a href="'+this.children[0]+'">'+ $(this).find('>a').html() +'</a></div>');
                $(this).find('>a img').remove();
            }
        }
        $(this).addClass('list');
    });

    $('.full__banner-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });

    $('.showcase .showcase__list > span').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            }
        ]
    });

    var lastScrollTop = 0;
    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st > 150) {
            $('body').addClass('moving');
            if (st > lastScrollTop) {
                $('body').addClass('moving--down');
            } else {
                $('body').removeClass('moving--down');
            }
            lastScrollTop = st;
        } else {
            $('body').removeClass('moving');
        }
    });

    $('.btNews').attr('value', 'QUERO APROVEITAR');

    $( ".botoesSpot .spotTelevendas" ).each(function() {
        $(this).closest(".spot").addClass("spot__request");
    });
 
});

$( document ).ajaxComplete(function(event, xhr, settings) {
  if( settings.url.indexOf("CadastroNews") >= 0 ){
    $(".popUp-News input#modal-Nome").attr("placeholder", "Seu nome aqui")
    $(".popUp-News input#modal-Email").attr("placeholder", "Seu e-mail aqui")
    $(".popUp-News input#btnCadastrarNews").attr("value", "QUERO GANHAR!")
  }
});