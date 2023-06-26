const close_btn = document.querySelector(".close-btn");

const hamburger = document.querySelector(".hamburger");

const mobile_nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobile_nav.classList.add("active");
});

close_btn.addEventListener("click", () => {
  mobile_nav.classList.remove("active");
});
