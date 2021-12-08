// Splash screen
$(document).ready(function () {
    $(".splash_b").click(function () {
        $(".splash_sc").addClass("hidesplash");

    })
})

// Header start
$(document).ready(function () {
    $(".search").click(function () {
        $(".search_panel").fadeToggle(500);
        $(".search_panel").css("z-index", "9999");
    })
})

$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

var lastScrollTop = 300;

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        $("a.scroll").removeClass("off");
        $("a.scroll").addClass("on");
    }
    else {
        $("a.scroll").removeClass("on");
        $("a.scroll").addClass("off");
    }
});

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        $("#skiny.skiny_header").slideDown(400);
    }
    else {
        $("#skiny.skiny_header").slideUp(400);
    }
});

// Navbar Click start
$(document).ready(function () {
    $("header.main .sidebar .sidebar_list ul li a").click(function () {
        if ($(this).next().attr("class") == "fas fa-caret-right") {
            $(this).next().removeClass("fa-caret-right");
            $(this).next().addClass("fa-caret-down");
        }
        else{
            $(this).next().removeClass("fa-caret-down");
            $(this).next().addClass("fa-caret-right");
        }
        $(this).next().next().slideToggle(800);
    });
})

let openSidebar = document.querySelector(".navbar_click_icon .icon .openSidebar");
let close = document.querySelector("header.main .sidebar .close")

openSidebar.addEventListener("click", function(){
    document.body.classList.add("active");
})

close.addEventListener("click", function(){
    document.body.classList.remove("active");
})

// First-accordion start
$(document).ready(function () {
    $("#first_accordion .elements").find(".title").mouseover(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
    });

    $("#first_accordion .elements").find(".title").mouseleave(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }
    });

    $("#first_accordion .elements").first().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }

        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").addClass("fas fa-plus");

        $("#first_accordion .elements").first().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").first().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").first().find(".title").not($(this)).css({ background: "#ffffff" });


        $(this).next().slideToggle(500);
        $("#first_accordion .elements").first().find(".content").not($(this).next()).slideUp(500);
    });

    $("#first_accordion .elements").last().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#f34f3f"
            });
            $(this).find("h6").css({ color: "#ffffff" });
            $(this).find("i").css({ color: "#ffffff" });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).css({
                transition: "all 0.2s ease-out",
                background: "#ffffff"
            });
            $(this).find("h6").css({ color: "#1b1b1b" });
            $(this).find("i").css({ color: "#1b1b1b" });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }

        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").addClass("fas fa-plus");

        $("#first_accordion .elements").last().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").last().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
        $("#first_accordion .elements").last().find(".title").not($(this)).css({ background: "#ffffff" });

        $(this).next().slideToggle(500);
        $("#first_accordion .elements").last().find(".content").not($(this).next()).slideUp(500);
    })

});

// Second-accordion start
$(document).ready(function () {
    $("#second_accordion .elements").find(".title").mouseover(function () {
        if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
    });

    $("#second_accordion .elements").find(".title").mouseleave(function () {
        if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
                color: "#1b1b1b",
                transition: "all 0.2s"
            });
            $(this).find("i").css({
                color: "#1b1b1b",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }
    });

    $("#second_accordion .elements").first().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).find("h6").css({
                color: "#1b1b1b",
                transition: "all 1s"
            });
            $(this).find("i").css({
                color: "#1b1b1b",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }
        $("#second_accordion .elements").first().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#second_accordion .elements").first().find(".title").not($(this)).find("i").addClass("fas fa-plus");
        $("#second_accordion .elements").first().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#second_accordion .elements").first().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });
        $(this).next().slideToggle(500);
        $("#second_accordion .elements").first().find(".content").not($(this).next()).slideUp(500);
    });

    $("#second_accordion .elements").last().find(".title").click(function () {
        if ($(this).next().css("display") === "none") {
            $(this).find("h6").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").css({
                color: "#f34f3f",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-plus");
            $(this).find("i").addClass("fas fa-minus");
        }
        else {
            $(this).find("h6").css({
                color: "#1b1b1b",
                transition: "all 1s"
            });
            $(this).find("i").css({
                color: "#1b1b1b",
                transition: "all 0.2s"
            });
            $(this).find("i").removeClass("fas fa-minus");
            $(this).find("i").addClass("fas fa-plus");
        }

        $("#second_accordion .elements").last().find(".title").not($(this)).find("i").removeClass("fas fa-minus");
        $("#second_accordion .elements").last().find(".title").not($(this)).find("i").addClass("fas fa-plus");

        $("#second_accordion .elements").last().find(".title").not($(this)).find("i").css({ color: "#1b1b1b" });
        $("#second_accordion .elements").last().find(".title").not($(this)).find("h6").css({ color: "#1b1b1b" });


        $(this).next().slideToggle(500);
        $("#second_accordion .elements").last().find(".content").not($(this).next()).slideUp(500);
    })
});

// First tab start
let f_menus = document.querySelectorAll("#first_tabMenu .f_menus div");
let f_contents = document.querySelectorAll("#first_tabMenu .f_contents div");

for (let menu of f_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#first_tabMenu .f_menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of f_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

let s_menus = document.querySelectorAll("#first_tabMenu .s_menus div");
let s_contents = document.querySelectorAll("#first_tabMenu .s_contents div");

for (let menu of s_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#first_tabMenu .s_menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of s_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

// Second tab start
let ss_menus = document.querySelectorAll("#second_tabMenu .menus div");
let ss_contents = document.querySelectorAll("#second_tabMenu .contents div");

for (let menu of ss_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#second_tabMenu .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of ss_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

// Third tab start
let t_menus = document.querySelectorAll("#third_tabMenu .menus div");
let t_contents = document.querySelectorAll("#third_tabMenu .contents div");

for (let menu of t_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#third_tabMenu .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of t_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

// Tab Menu start
let p_menus = document.querySelectorAll("#p_tab_menu .menus .menu");
let p_contents = document.querySelectorAll("#p_tab_menu .contents .content");

for (let menu of p_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#p_tab_menu .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of p_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

//Home Second Slider
$(document).ready(function () {
    $('.slider.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

//Main Slider Home
$('.images.multiple-items').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear'
});

// All Products In Home
$(document).ready(function () {
    $("#all_products_heading .heading_nav h6").click(function () {
        $("#all_products_heading .heading_nav ul").slideToggle(500);
    });
})

let heading_li = document.querySelectorAll("#all_products_heading .heading_nav ul li a");
let show_products = document.querySelectorAll("#all_products .same_product");

for (let a of heading_li) {
    a.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#all_products_heading .heading_nav ul .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.parentElement.getAttribute("data-id");
        for (let sp of show_products) {
            if (data_id == sp.getAttribute("data-id")) {
                sp.classList.remove("d-none");
            }
            else {
                sp.classList.add("d-none");
            }
        }
    })
}

// Shop List Product Part start
$(document).ready(function () {
    $('button.slick-next').click(function () {
        $("#shop_list_products_carousel .cards").slick('slickPrev');
    });
    $('button.slick-prev').click(function () {
        $("#shop_list_products_carousel .cards").slick('slickNext');
    });
})

$('#shop_list_products_carousel .cards.multiple-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

// Progress Bar Page 
$('.loading').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2600,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Join to Us In Home Part
$(document).ready(function(){
    $(".search .search_button .submit").click(function(){
        $(".search_click").slideToggle(700);
    })
})





