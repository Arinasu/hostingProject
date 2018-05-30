let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButton = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    // modal.style.display = 'block';
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
