(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function () {

	var slideDescript;
    var countSlides;
	var indexSlide;
	var btnAttr;
	var parentEl;

	// --------------------------

	var attrIndexMiniatureSlider;
	var tabSliderIndexAttr;
	var currentSlide;

	// --------------------------

	$(".main-slider").not(".slick-initialized").slick({
      dots: true,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      appendDots: $(".main-slider-dots-append nobr")
    });

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

    $(".main-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){

    	if( currentSlide > 0 && currentSlide < countSlides ) {

			$(".prev-sl-btn").css({"display" : "inline-block"});

		} else {

			$(".prev-sl-btn").css({"display" : "none"});

		}

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

	    	}

	    });


    	$(".sl-btn").click(function() {

    		countSlides =  $(".main-slider .slide").length - 1;

    		if($(this).hasClass("prev-sl-btn")) {

    			$(".main-slider .slick-prev").click();    			

    		} else if($(this).hasClass("next-sl-btn")) {	    		

		    	$(".main-slider .slick-next").click();

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
      dots: true,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: ".portfolio-slider-arrows",
      appendDots: ".portfolio-slider-pagination"
    });

    $(".big-tab-slider").each(function() {

    	tabSliderIndexAttr = $(this).attr("data-tab-slider-index");

	   	$(".big-tab-slider[data-tab-slider-index = '"+ tabSliderIndexAttr +"']").not(".slick-initialized").slick({
	      dots: false,
	      arrows: false,
	      speed: 700,
	      slidesToShow: 1,
	      fade: true,
	      autoplay: true,
	      autoplaySpeed: 17000,
	      asNavFor: ".miniature[ data-tab-slider-index = '"+ tabSliderIndexAttr +"']"
	    });

	    $(".miniature[data-tab-slider-index = '"+ tabSliderIndexAttr +"']").not(".slick-initialized").slick({
	      dots: false,
	      arrows: false,
	      speed: 700,
	      centerPadding : "5px",
	      slidesToShow: 7,
	      slidesToScroll: 1,
	      focusOnSelect: true,
	      autoplay: true,
	      autoplaySpeed: 17000,
	      asNavFor: ".big-tab-slider[ data-tab-slider-index = '"+ tabSliderIndexAttr +"']",
	      responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 6
		      }
		    },
		    {
		      breakpoint: 920,
		      settings: {
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 420,
		      settings: {
		        slidesToShow: 3
		      }
		    }
		  ]
	    });

    });


 //    $(".big-tab-slider[data-tab-slider-index = '1']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      slidesToShow: 1,
 //      fade: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".miniature[ data-tab-slider-index = '1']"
 //    });

 //    $(".miniature[data-tab-slider-index = '1']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      centerPadding : "5px",
 //      slidesToShow: 7,
 //      slidesToScroll: 1,
 //      focusOnSelect: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".big-tab-slider[ data-tab-slider-index = '1']",
 //      responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         slidesToShow: 6
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 5
	//       }
	//     },
	//     {
	//       breakpoint: 355,
	//       settings: {
	//         slidesToShow: 3
	//       }
	//     }
	//   ]
 //    });

 //    $(".big-tab-slider[data-tab-slider-index = '2']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      slidesToShow: 1,
 //      fade: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".miniature[ data-tab-slider-index = '2']"
 //    });

 //    $(".miniature[data-tab-slider-index = '2']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      centerPadding : "5px",
 //      slidesToShow: 7,
 //      slidesToScroll: 1,
 //      focusOnSelect: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".big-tab-slider[ data-tab-slider-index = '2']",
 //      responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         slidesToShow: 6
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 5
	//       }
	//     },
	//     {
	//       breakpoint: 355,
	//       settings: {
	//         slidesToShow: 3
	//       }
	//     }
	//   ]
 //    });


	// $(".big-tab-slider[data-tab-slider-index = '3']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      slidesToShow: 1,
 //      fade: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".miniature[ data-tab-slider-index = '3']"
 //    });

 //    $(".miniature[data-tab-slider-index = '3']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      centerPadding : "5px",
 //      slidesToShow: 7,
 //      slidesToScroll: 1,
 //      focusOnSelect: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".big-tab-slider[ data-tab-slider-index = '3']",
 //      responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         slidesToShow: 6
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 5
	//       }
	//     },
	//     {
	//       breakpoint: 355,
	//       settings: {
	//         slidesToShow: 3
	//       }
	//     }
	//   ]
 //    });


	// $(".big-tab-slider[data-tab-slider-index = '4']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      slidesToShow: 1,
 //      fade: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".miniature[ data-tab-slider-index = '4']"
 //    });

 //    $(".miniature[data-tab-slider-index = '4']").not(".slick-initialized").slick({
 //      dots: false,
 //      arrows: false,
 //      speed: 700,
 //      centerPadding : "5px",
 //      slidesToShow: 7,
 //      slidesToScroll: 1,
 //      focusOnSelect: true,
 //      autoplay: true,
 //      autoplaySpeed: 17000,
 //      asNavFor: ".big-tab-slider[ data-tab-slider-index = '4']",
 //      responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         slidesToShow: 6
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 5
	//       }
	//     },
	//     {
	//       breakpoint: 355,
	//       settings: {
	//         slidesToShow: 3
	//       }
	//     }
	//   ]
 //    });


    $(".miniature .slide").click(function() {

    	parentEl = $(this).parent();

        for(;;) {

            parentEl = parentEl.parent();

            if(parentEl.hasClass("miniature")) {

                attrIndexMiniatureSlider = parentEl.attr("data-tab-slider-index");

                break;

            }

        }

    	$(".miniature[data-tab-slider-index = '" + attrIndexMiniatureSlider + "'] .slide").each(function(index) {

    		currentSlide = $(".miniature[data-tab-slider-index = '" + attrIndexMiniatureSlider + "'] .slide:eq("+ index +")");

    		if( !currentSlide.hasClass("slick-current") ) {
 
		 		currentSlide.removeClass("active");

		 	}

	    });

		$(this).addClass("active");

    });

    $(".miniature").each(function() {

    	attrIndexMiniatureSlider = $(this).attr("data-tab-slider-index");

    	$(".miniature[data-tab-slider-index = '" + attrIndexMiniatureSlider + "'] .slide").each(function(index) {

    		currentSlide = $(".miniature[data-tab-slider-index = '" + attrIndexMiniatureSlider + "'] .slide:eq("+ index +")");

    		if( currentSlide.hasClass("slick-current") ) {
 
		 		currentSlide.addClass("active");

		 	}

	    });

    });


    // ---------------------------------------------------

    $(".team-slider").not(".slick-initialized").slick({
      dots: true,
      arrows: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
        responsive: [
	    {
	      breakpoint: 923,
	      settings: {
	        slidesToShow: 3,
	        slideToScroll: 3
	      }
	    },
	    {
	      breakpoint: 689,
	      settings: {
	        slidesToShow: 2,
	        slideToScroll: 2
	      }
	    },
	    {
	      breakpoint: 490,
	      settings: {
	        slidesToShow: 1,
	        slideToScroll: 1
	      }
	    }
	  ]
    });



});