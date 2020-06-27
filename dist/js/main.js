$(function() {
    // $(".block").pagepiling({
    //     menu: null,
    //     direction: "gorizontal",
    //     verticalCentered: true,
    //     anchors: [],
    //     scrollingSpeed: 700,
    //     easing: "swing",
    //     loopBottom: false,
    //     loopTop: false,
    //     css3: true,
    //     navigation: {
    //         textColor: "#000",
    //         bulletsColor: "#000",
    //         position: "right",
    //         tooltips: ["section1", "section2", "section3", "section4"],
    //     },
    //     normalScrollElements: null,
    //     normalScrollElementTouchThreshold: 5,
    //     touchSensitivity: 5,
    //     keyboardScrolling: true,
    //     sectionSelector: ".section",
    //     animateAnchor: false,

    //     //events
    //     onLeave: function(index, nextIndex, direction) {},
    //     afterLoad: function(anchorLink, index) {},
    //     afterRender: function() {},
    // });

    /* scroll */

    var page = 1;
    var oldPage = null;

    $(".block").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {
            if (oldPage == index) {
                return;
            }
            if (index == 1) {
                $(".prev-section").css("display", "none");
            }
            if (index != 1) {
                $(".prev-section").css("display", "");
            }
            if (index == 4) {
                $(".next-section").css("display", "none");
            }
            if (index != 4) {
                $(".next-section").css("display", "");
            }
            page = index;
            $(".pages").html(`${index}/4`);

            if (oldPage) {
                $(`[data-scroll=${oldPage}]`).removeClass("active");
            }

            $(`[data-scroll=${index}]`).addClass("active");
            oldPage = index;
        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "horizontal",
        responsiveFallback: 992, // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

    var pages = ["Главная", "О нас", "Кейсы", "Отзывы"];

    setTimeout(function() {
        $(".onepage-pagination").prepend("<span class='pages'>1/4</span>");
        $(".onepage-pagination [data-index]").each(function() {
            $(this).html(`<span>${pages[$(this).attr("data-index") - 1]}</span>`);
        });
    });

    $(".next-section").click(function() {
        $(".main").moveTo(page + 1);
    });

    $(".prev-section").click(function() {
        $(".main").moveTo(page - 1);
    });

    /* scroll */

    /* header */

    $("[data-scroll]").click(function() {
        let scrollTo = Number($(this).attr("data-scroll"));
        $(".main").moveTo(scrollTo);
    });

    /* header */
});