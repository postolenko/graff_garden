$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var indexTabs;
    var indexActiveTab = 0;
    var attrForActiveTabNav;
    var parentEl;

    // ----------------------------

    var indexTabs;
    var indexTabLink;

    // ----------------------------

    getFooterPosition();

    getHeaderFixedPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------------------------------------------------------------

        $(".popup").css({
            "margin-top" : ( $(window).height() - $(".popup").height() ) / 2 + "px"
        });

        // ----------------------------------------------------------------------------

        getHeaderFixedPosition();

    });

    $(document).scroll(function() {

        getHeaderFixedPosition();

    });


    // ------ Tabs -------

    $(function() {

        for(indexTabs = 0; indexTabs < $(".tabs").length; indexTabs++ ) {

            if( $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").length > 0 ) {

                $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").css({"display" : "none"});

                $(".tabs:eq("+ indexTabs +") .tab-link").each(function() {

                    if($(this).hasClass("active")) {

                        indexActiveTab = $(this).attr("data-tab-link-index");

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab[data-tab-link = '"+ indexActiveTab +"']").fadeIn(300)

                    }

                });

            }

        }     

    });

    $(function() {

        $(".tabs .tab-nav li .tab-link").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("tabs")) {

                    indexTabs = $(".tabs").index(parentEl);

                    break;

                }

            }

            attrForActiveTabNav = $(this).attr("data-tab-link-index");

            if($(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").is(":hidden")) {

                $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link").removeClass("active");

                $(this).addClass("active");

                $(".tabs:eq("+ indexTabs +") .tab").each(function() {

                    if($(this).is(":visible") && $(this).attr("data-tab-link") != attrForActiveTabNav) {

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box").height($(this).height());

                    }

                });

                $(".tabs:eq("+ indexTabs +") .tab").fadeOut(300);

                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").fadeIn(300);

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").animate({"height" : $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").height() + "px"}, 300);

                }, 400);
 
                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").css({"height" : "auto"});

                }, 800);

            }

        });

    });
    
    // ------ /Tabs -------

    // ----------------------

    $(function() {

        $(".popup-bg, .close-popup-btn").click(function() {

            $(".popups-sect").fadeOut(400);
            $(".popup").fadeOut(400);

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".popups-sect").fadeOut(400);
                $(".popup").fadeOut(400);

            }

        });

    });

    // ----------------------

    $(function() {

        // var indexTabs;
        // var indexTabLink;

        for( indexTabs = 0; indexTabs <= $(".tabs").length - 1; indexTabs++ ) {

            for( indexTabLink = 0; indexTabLink <= $(".tabs:eq("+ indexTabs +") .tab-nav li").length - 1; indexTabLink ++ ) {

                $(".tabs:eq("+ indexTabs +") .tab-nav li:eq("+ indexTabLink +") button").prepend("<span class='tab-link-num'>"+ ( indexTabLink + 1 ) +"</span>");

            }

        }

    });

    // ----------------------

    function getHeaderFixedPosition() {

        if( bodyWidth > 768 ) {

            if( $(window).scrollTop() >= $(".header-site").height() ) {

                $(".header-site").addClass("fixed");

            } else {

                $(".header-site").removeClass("fixed");

            }

        }

    }


    // ----------------------

    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }



});
