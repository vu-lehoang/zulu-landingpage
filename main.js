// const menuToggle = document.querySelector(".header-toggle");
// const menuHeader = document.querySelector(".header-menu");
// const expandClass = "is-expand";
// menuToggle.addEventListener("click", function(){
//     menuHeader.classList.add(expandClass)
// });
// window.addEventListener("click",function(e){
//     if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
//         menuHeader.classList.remove(expandClass);
//     }
// })
// const menuToggle = document.querySelector(".header-toggle");
// const menuHeader = document.querySelector(".header-menu");
// const expandClass = "is-expand";
// menuToggle.addEventListener("click", function(){
//     menuHeader.classList.add(expandClass)
// });
// window.addEventListener("click",function(e){
//     if(!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")){
//         menuHeader.classList.remove(expandClass);
//     }
// })

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// slick
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});

// $(document).ready(function () {
//   $(".client-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });


