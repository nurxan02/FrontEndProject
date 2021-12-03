// $(document).ready(function () {
//     $(".nav_li").mouseenter(function () {
//         $(this).children("div").slideDown(250)
//     })
//     $(".nav_li").mouseleave(function () {
//         $(this).children("div").slideUp(250)
//     })
//     $("li").mouseenter(function () {
//         $(this).children(".side").slideDown(150)
//     })
//     $("li").mouseleave(function () {
//         $(this).children(".side").slideUp(150)
//     })
//     $(".Shop").mouseenter(function () {
//         $(this).children("div").slideDown({
//             start: function () {
//                 $(this).css({
//                     display: "flex"
//                 })
//             }
//         })
//     })

//     $(window).on('scroll', function () {
//         if ($(window).scrollTop() > 350) {
//             $("header").addClass("sticky")
//         } else {
//             $("header").removeClass("sticky")
//         }

//     })

// });
// ------------------------------
// $(document).ready(function () {
//     let filters = document.querySelectorAll(".filters span")
//     let flowers = document.querySelectorAll(".product")
//     filters.forEach((filter) => {
//         $(filter).click(function () {
//             let dataid = $(this).attr("data-id")
//             console.log(dataid);
//             flowers.forEach((delprod) => {
//                 $(delprod).addClass("unactiveProd")
//             })
//             let stayedprod = Array.from(document.getElementsByClassName(dataid))
//             stayedprod.forEach((prod) => {
//                 $(prod).removeClass("unactiveProd")
//             })

//         })

//     })
// });