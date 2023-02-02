const header = document.querySelector(".header-area");
const navbar = document.querySelector(".nav-area");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_navlist = document.querySelector(".nav-list");
const mobile_navlinks = document.querySelectorAll(".nav-links");

// show nav on btn click
mobile_menu.addEventListener("click", function () {
  mobile_navlist.classList.toggle("activeNav");
  document.body.style.overflowY="hidden";  
  closeIcon();
});
mobile_navlinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobile_navlist.classList.toggle("activeNav");
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
function closeIcon() {
  if (mobile_navlist.classList.contains("activeNav")) {
    mobile_menu.src = "images/close-icon.svg";
  } else {
    document.body.style.overflowY="visible";
    mobile_menu.src = "images/mobile-menu.svg";
  }
}
