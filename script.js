let menuIcon = document.querySelector(".menu-icon")
let crossIcon = document.querySelector(".close-menu-icon")
let mobileMenuContainer = document.querySelector(".mobile-menu-container")
let navLinks = document.querySelectorAll(".nav-links > span")
let mobileMenuLinks = document.querySelectorAll(".mobile-menu-links > span")
let viewAllProjectsBtn = document.querySelector(".all-projects-btn")
let allProjectsContainer = document.querySelector(".all-projects-container")
let backFromAllProjectsBtn = document.querySelector(".backFromAllProjectsBtn")
let homeSection = document.getElementById("home")
let aboutSection = document.getElementById("about")
let projectsSection = document.getElementById("projects")
let contactSection = document.getElementById("contact")
let scrollTopBtn = document.querySelector(".scrollTop")
let viewProjectsCta = document.getElementById("view-projects-cta")
let contactMeCta = document.getElementById("contact-me-cta")
let skillsContainer = document.getElementById("skillsContainer")

const skills = [
    {
        name: "HTML",
        image: "images/html.png"
    },
    {
        name: "CSS",
        image: "images/css.png"
    },
    {
        name: "JavaScript",
        image: "images/javascript.png"
    },
    {
        name: "Bootstrap",
        image: "images/bootstrap.webp"
    },
    {
        name: "Git",
        image: "images/git.png"
    },
    {
        name: "GitHub",
        image: "images/github.webp"
    }
]

skills.forEach((skill) => {
    let skillHTML = document.createElement("span")
    skillHTML.innerHTML =`<img src="${skill.image}">
                          ${skill.name}`
    skillsContainer.appendChild(skillHTML)
})


function activeLinkHanler(links, clickedLink) {
    links.forEach(link => {
        link.classList.remove("active")
    })
    clickedLink.classList.add("active")

    if (clickedLink.innerText.toLowerCase() == "home") {
        window.scrollTo({
            top: homeSection.offsetTop - 120
        })
    } else if (clickedLink.innerText.toLowerCase() == "about") {
        window.scrollTo({
            top: aboutSection.offsetTop - 120
        })
    } else if (clickedLink.innerText.toLowerCase() == "projects") {
        window.scrollTo({
            top: projectsSection.offsetTop - 120
        })
    } else if (clickedLink.innerText.toLowerCase() == "contact") {
        window.scrollTo({
            top: contactSection.offsetTop - 120
        })
    }
}

function activeLinkOnScroll() {
    setTimeout(() => {
        if (window.scrollY >= 0 && window.scrollY < aboutSection.offsetTop - 120) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[0].classList.add("active")
            mobileMenuLinks[0].classList.add("active")
        } else if (window.scrollY >= aboutSection.offsetTop - 120 && window.scrollY < projectsSection.offsetTop - 120) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[1].classList.add("active")
            mobileMenuLinks[1].classList.add("active")
        } else if (window.scrollY >= projectsSection.offsetTop - 120 && window.scrollY < contactSection.offsetTop - 600) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[2].classList.add("active")
            mobileMenuLinks[2].classList.add("active")
        } else if (window.scrollY > contactSection.offsetTop - 600) {
            navLinks.forEach(link => {
                link.classList.remove("active")
            })
            mobileMenuLinks.forEach(link => {
                link.classList.remove("active")
            })
            navLinks[3].classList.add("active")
            mobileMenuLinks[3].classList.add("active")
        }
    }, 600);
}
activeLinkOnScroll()


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

viewAllProjectsBtn.addEventListener("click", () => {
    allProjectsContainer.classList.add("active")
    document.body.style.overflow = "hidden"
})

backFromAllProjectsBtn.addEventListener("click", () => {
    allProjectsContainer.classList.remove("active")
    document.body.style.overflow = "auto"
})

scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0 }))

viewProjectsCta.addEventListener("click", () => window.scrollTo({ top: projectsSection.offsetTop - 120 }))

contactMeCta.addEventListener("click", () => window.scrollTo({ top: contactSection.offsetTop }))