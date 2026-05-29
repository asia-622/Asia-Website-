// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animations
const elements = document.querySelectorAll(
  ".fade-up, .fade-left, .fade-right, .fade-in"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

elements.forEach((el)=>{
  observer.observe(el);
});
