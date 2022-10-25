let currentYear = new Date().getFullYear();
const copyRightSpan = document.querySelector(".copy-right-year");
const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");

copyRightSpan.textContent = currentYear;

// menuBtn.addEventListener("click", () => {
//   if (mobileNav.display === "none") {
//     mobileNav.display === "flex";
//   } else {
//     mobileNav.display === "none";
//   }
// });

// menuBtn.addEventListener("click", console.log("clicked"));

let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    mobileNavBtnBurger.classList.add("open");
    mobileNav.style.transform = "translateY(0)";

    showMenu = true;
  } else {
    mobileNavBtnBurger.classList.remove("open");
    mobileNav.style.transform = "translateY(-110%)";

    showMenu = false;
  }
});
