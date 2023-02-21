let currentYear = new Date().getFullYear();
const copyRightSpan = document.querySelector(".copy-right-year");
const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");
const contactForm = document.querySelector(".contact-form");
const contactFormSubmitText = document.querySelector(
  ".contact-form__submit-text"
);
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

// Show Success text when message submitted (contact-form)

let messageSent = false;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageSent = true;
  if (messageSent) {
    contactFormSubmitText.classList.remove("d-none");
  }

  setTimeout(() => {
    messageSent = false;
    contactFormSubmitText.classList.add("d-none");
  }, 1000);
});
