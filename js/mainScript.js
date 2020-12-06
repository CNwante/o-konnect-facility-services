
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


