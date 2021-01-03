/*=============================================================================
  Hamburger Menu Icon Script
===============================================================================*/
function menuIcon(me){
	me.classList.toggle("change");
}
  
/*=============================================================================
  Navigation Script for Mobile
===============================================================================*/
const hamburger = document.querySelector('.hamburger');
const navBox = document.querySelector('.navBox');
const links = document.querySelectorAll('.navBox .navList');

hamburger.addEventListener('click', () => {
  navBox.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});


/*=============================================================================
  Itersection Observer Script
===============================================================================*/
const header = document.querySelector(".headerContainer");
const sectionOne = document.querySelector(".mainContainer");

const sectionOneOptions = {
  rootMargin: "-350px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);


/*============ Image Slider Script Starts Here ============*/
$(".slideshow > div:gt(0)").hide();

setInterval(function() { 
$('.slideshow > div:first')
	.fadeOut(1000)
	.next()
	.fadeIn(1000)
	.end()
	.appendTo('.slideshow');
}, 5000);
/*============ Image Slider Script Ends Here ============*/