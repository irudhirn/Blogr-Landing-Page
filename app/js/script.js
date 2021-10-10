const menuOpen = document.querySelector(".menu__btn--open");
const menuClose = document.querySelector(".menu__btn--close");

const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuLinks = document.querySelectorAll(".mobile__menu--links");

const desktopMenu = document.querySelector(".desktop__menu");
const desktopMenuLinks = document.querySelectorAll(".desktop__menu--links");
const desktopMenuLinksList = document.querySelectorAll(
  ".desktop__menu .link-list"
);

const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  if (menuOpen.classList.contains("active")) {
    menuOpen.classList.remove("active");
    menuClose.classList.add("active");
    mobileMenu.classList.add("active");
  }
});

menuClose.addEventListener("click", () => {
  if (menuClose.classList.contains("active")) {
    menuClose.classList.remove("active");
    menuOpen.classList.add("active");
    mobileMenu.classList.remove("active");
  }
});

mobileMenuLinks.forEach((mobileMenuLink, index) => {
  mobileMenuLink.addEventListener("click", () => {
    mobileMenuLinks.forEach((link, i) => {
      if (index !== i) {
        link.classList.remove("active");
      }
    });
    mobileMenuLink.classList.toggle("active");
  });
});

// desktopMenu.addEventListener("mouseleave", () => {
//   desktopMenuLinks.forEach((link) => {
//     link.classList.remove("active");
//   });
// });

desktopMenuLinksList.forEach((link, i) => {
  link.addEventListener("mouseleave", () => {
    desktopMenuLinks[i].classList.remove("active");
  });

  nav.addEventListener("mouseleave", () => {
    desktopMenuLinks[i].classList.remove("active");
  });
});

desktopMenuLinks.forEach((desktopMenuLink, index) => {
  desktopMenuLink.addEventListener("mouseover", () => {
    desktopMenuLinks.forEach((link, i) => {
      if (index !== i) {
        link.classList.remove("active");
      }
    });
    desktopMenuLink.classList.add("active");
  });
});

// desktopMenuLinks.forEach((desktopMenuLink, index) => {
//   desktopMenuLink.addEventListener("mouseover", () => {
//     desktopMenuLink.classList.add("active");
//   });
//   desktopMenuLink.addEventListener("mouseleave", () => {
//     desktopMenuLink.classList.remove("active");
//   });
// });
