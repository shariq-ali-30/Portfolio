let menuIcon = document.querySelector(".menu-icon")
let crossIcon = document.querySelector(".close-menu-icon")
let mobileMenuContainer = document.querySelector(".mobile-menu-container")

menuIcon.addEventListener("click", () => mobileMenuContainer.classList.add("active"))
crossIcon.addEventListener("click", () => mobileMenuContainer.classList.remove("active"))