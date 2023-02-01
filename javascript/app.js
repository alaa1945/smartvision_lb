const header = document.querySelector(".header-area");
const navbar = document.querySelector(".nav-area");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_navlist = document.querySelector(".nav-list");
const mobile_navlinks = document.querySelectorAll(".nav-links");


// show nav on btn click
mobile_menu.addEventListener("click", function () {
  mobile_navlist.classList.toggle("active");
  closeIcon();
});
mobile_navlinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobile_navlist.classList.toggle("active");
    closeIcon();
  });
});
document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#ffffff";
      header.style.paddingBottom = "20px";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });