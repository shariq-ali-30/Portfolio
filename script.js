let menuIcon = document.querySelector(".menu-icon")
let crossIcon = document.querySelector(".close-menu-icon")
let mobileMenuContainer = document.querySelector(".mobile-menu-container")
let navLinks = document.querySelectorAll(".nav-links > span")
let mobileMenuLinks = document.querySelectorAll(".mobile-menu-links > span")

function activeLinkHanler(links, clickedLink) {
    links.forEach(link => {
        link.classList.remove("active")
    })
    clickedLink.classList.add("active")

    if (clickedLink.innerText.toLowerCase() == "home") {
        window.scrollTo({
            top: 0
        })
    } else if (clickedLink.innerText.toLowerCase() == "about") {
        window.scrollTo({
            top: 480
        })
    } else if (clickedLink.innerText.toLowerCase() == "projects") {
        window.scrollTo({
            top: 800
        })
    } else if (clickedLink.innerText.toLowerCase() == "contact") {
        window.scrollTo({
            top: 1200
        })
    }
}

function activeLinkOnScroll() {
    setTimeout(() => {
        if (window.scrollY >= 0 && window.scrollY < 480) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[0].classList.add("active")
            mobileMenuLinks[0].classList.add("active")
        } else if (window.scrollY >= 480 && window.scrollY < 800) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[1].classList.add("active")
            mobileMenuLinks[1].classList.add("active")
        } else if (window.scrollY >= 800 && window.scrollY < 1200) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[2].classList.add("active")
            mobileMenuLinks[2].classList.add("active")
        } else if (window.scrollY > 1200) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[3].classList.add("active")
            mobileMenuLinks[3].classList.add("active")
        }
    }, 1000);
}




// Event Listners

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active")
    document.body.style.overflow = "hidden";
})
crossIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active")
    document.body.style.overflow = "auto";
})
navLinks.forEach(link => link.addEventListener("click", () => { activeLinkHanler(navLinks, link) }))
mobileMenuLinks.forEach(link => link.addEventListener("click", () => { activeLinkHanler(mobileMenuLinks, link) }))
window.addEventListener("scroll", activeLinkOnScroll)