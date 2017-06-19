(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function () {

	$(".main-slider").not(".slick-initialized").slick({
      dots: true,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      appendDots: $(".main-slider-dots-append nobr"),
      appendArrows: $(".main-slider-arows-append .inner")
      // autoplay: true,
      // autoplaySpeed: 17000
    });

    var slideDescript;
    var countSlides;
	var indexSlide;
	var btnAttr;

	countSlides =  $(".main-slider .slide").length - 1;

    $(".main-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

    	$(".main-slider-arows-append .slide-append-descript").html(" ");

    	slideDescript = $(".main-slider .slide:eq("+ nextSlide +") .slide-descript").html();

    	$(".main-slider-arows-append .slide-append-descript").append(slideDescript);			    	

    	$(".main-slider .slide").each(function() {

    		if( $(this).hasClass("slick-current") ) {

    			if( nextSlide > 0 && nextSlide < countSlides ) {

    				$(".next-sl-btn span").html( "Дальше&nbsp;&nbsp;&#10095;" );

    			} else if( nextSlide == 0 ) {

					$(".next-sl-btn span").html( "Начнем!&nbsp;&nbsp;&#10095;" );

    			}

    			if( nextSlide == countSlides ){

    				$(".next-sl-btn").attr("data-callpopup", "callback-popup");

    				$(".next-sl-btn span").html( "Мне нравится!" );

    			} else if( $(".next-sl-btn").attr("data-callpopup") ){

    				$(".next-sl-btn").removeAttr("data-callpopup");

    			}

    		}

    	});

    });

    $(function() {

    	if($(".main-slider").hasClass("slick-initialized") ) {

	    	$(".main-slider .slide").each(function() {

	    		if( $(this).hasClass("slick-current") ) {

	    			slideDescript = $(this).children(".slide-descript").html();

	    			$(".main-slider-arows-append .slide-append-descript").append(slideDescript);

	    		}

	    	});

	    }

	    $(".show_popup").click(function() {

	    	if( $(this).attr("data-callpopup") ) {

	    		btnAttr = $(this).attr("data-callpopup");

	    		$(".popups-sect").fadeIn(400);

	    		$("[data-popup = '"+ btnAttr +"']").fadeIn(400);

	    		$("[data-popup = '"+ btnAttr +"']").css({
	    			"margin-top" : ( $(window).height() - $("[data-popup = '"+ btnAttr +"']").height() ) / 2 + "px"
	    		});

	    	} else {

		    	$(".main-slider-arows-append .slick-next").click();

		    	countSlides =  $(".main-slider .slide").length - 1;

		    	$(".main-slider .slide").each(function() {

		    		if( $(this).hasClass("slick-current") ) {

		    			indexSlide = $(this).index(".main-slider .slide");

		    			if( indexSlide > 0 && indexSlide < countSlides ) {

		    				$(".next-sl-btn span").html( "Дальше&nbsp;&nbsp;&#10095;" );

		    			} else if( indexSlide == 0 ) {

							$(".next-sl-btn span").html( "Начнем!&nbsp;&nbsp;&#10095;" );

		    			}

		    			if( indexSlide == countSlides ){

		    				$(".next-sl-btn").attr("data-callpopup", "callback-popup");

		    				$(".next-sl-btn span").html( "Мне нравится!" );

		    			} else if( $(".next-sl-btn").attr("data-callpopup") ) {

		    				$(".next-sl-btn").removeAttr("data-callpopup");

		    			}

		    		}

		    	});

		    }

	    });


    });

    // ------------------------------------------------

    $(".portfolio-slider-big").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: ".portfolio-slider-arrows",
      asNavFor: ".miniature"
    });


    $(".miniature").not(".slick-initialized").slick({
      // centerMode: true,
      dots: true,
      arrows: false,
      speed: 700,
      centerPadding : "5px",
      slidesToShow: 7,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendDots: ".portfolio-slider-pagination",
      asNavFor: ".portfolio-slider-big",
      responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 6
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 355,
	      settings: {
	        slidesToShow: 3
	      }
	    }
	  ]
    });

    // ---------------------------------------------------

    $(".team-slider").not(".slick-initialized").slick({
      dots: true,
      arrows: true,
      speed: 700,
      slidesToShow: 4,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      // appendDots: ".portfolio-slider-pagination",
        responsive: [
	    {
	      breakpoint: 923,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 689,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 490,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
    });



});