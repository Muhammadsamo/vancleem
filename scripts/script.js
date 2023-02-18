let currentYear = new Date().getFullYear();
const copyRightSpan = document.querySelector(".copy-right-year");
const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");
// let section = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll(".main-nav ul li a");

copyRightSpan.textContent = currentYear;
let showMenu = false;

// Function to open Mobile Nav menu

function mobileNavOpen() {
  mobileNavBtnBurger.classList.add("open");
  mobileNav.style.transform = "translateY(5%)";
  showMenu = true;
}

// Function to close Mobile Nav menu

function mobileNavCLose() {
  mobileNavBtnBurger.classList.remove("open");
  mobileNav.style.transform = "translateY(-110%)";

  showMenu = false;
}

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    // If menu is Closed
    mobileNavOpen();
  } else {
    // If menu is already open
    mobileNavCLose();
  }
});

// To highlight the Navigation Link (Current Section) on Page Scroll

// window.onscroll = () => {
//   section.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector(".main-nav ul li a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
