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
let allProjectsParent = document.getElementById("all-projects-parent")
let featuredProjectsParent = document.getElementById("featured-projects-parent")

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
    skillHTML.innerHTML = `<img src="${skill.image}">
                          ${skill.name}`
    skillsContainer.appendChild(skillHTML)
})

const projects = [
    { title: "HTML Basics", description: "A beginner-friendly HTML project demonstrating semantic elements, headings, paragraphs, and basic text formatting to build a well-structured webpage.", image: "images/html-assignment-1.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-1", liveLink: "https://shariq-html-assignment-1.vercel.app", featured: false },
    { title: "Coffee Shop Landing Page", description: "A coffee shop landing page built with HTML, showcasing lists, blockquotes, horizontal rules, text formatting, and contact links.", image: "images/html-assignment-2.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-2", liveLink: "https://shariq-html-assignment-2.vercel.app", featured: false },
    { title: "Multi-Page E-Commerce Store", description: "A multi-page e-commerce website demonstrating directory structure, page navigation, and category-based routing using HTML.", image: "images/html-assignment-3.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-3", liveLink: "https://shariq-html-assignment-3.vercel.app", featured: false },
    { title: "Product Store", description: "A multi-page product store featuring category navigation, structured product listings, image mapping, and semantic HTML elements.", image: "images/html-assignment-4.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-4", liveLink: "https://shariq-html-assignment-4.vercel.app", featured: false },
    { title: "MegaMart E-Commerce Store", description: "A MegaMart-inspired e-commerce catalog featuring multiple product categories, anchor navigation, pricing sections, and semantic HTML structure.", image: "images/html-assignment-5.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-5", liveLink: "https://shariq-html-assignment-5.vercel.app", featured: false },
    { title: "Student Result Sheet", description: "A student result sheet designed with HTML tables to demonstrate tabular data organization, table headers, rows, and borders.", image: "images/html-assignment-6.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-6", liveLink: "https://shariq-html-assignment-6.vercel.app", featured: false },
    { title: "Chess Board", description: "A fully functional chessboard created using HTML tables with accurately positioned chess pieces and alternating square colors.", image: "images/html-assignment-7.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-7", liveLink: "https://shariq-html-assignment-7.vercel.app", featured: false },
    { title: "Student Registration Form", description: "A comprehensive student registration form built with HTML, featuring multiple input types, nested tables, validation attributes, and organized form sections.", image: "images/html-assignment-8.png", technologies: ["HTML"], githubLink: "https://github.com/shariq-ali-30/html-assignment-8", liveLink: "https://shariq-html-assignment-8.vercel.app", featured: false },
    { title: "Periodic Table", description: "An interactive Periodic Table built with HTML and CSS, featuring color-coded element categories, table spans, and smooth hover animations.", image: "images/css-assignment-1.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-1", liveLink: "https://shariq-css-assignment-1.vercel.app", featured: false },
    { title: "Amazon Homepage Clone", description: "A responsive Amazon homepage clone built with HTML and CSS using Flexbox, featuring a navigation bar, product sections, banners, and a multi-column footer.", image: "images/css-assignment-2.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-2", liveLink: "https://shariq-css-assignment-2.vercel.app", featured: false },
    { title: "Login Card UI", description: "A modern login card component featuring gradient backgrounds, responsive Flexbox layout, custom input fields, and subtle shadow effects.", image: "images/css-assignment-3.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-3", liveLink: "https://shariq-css-assignment-3.vercel.app", featured: false },
    { title: "Contact Form UI", description: "A dark-themed contact form with a responsive layout, custom input styling, organized form sections, and a clean user interface.", image: "images/css-assignment-4.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-4", liveLink: "https://shariq-css-assignment-4.vercel.app", featured: false },
    { title: "Healthy Food Landing Page", description: "A responsive healthy food landing page featuring Flexbox layouts, interactive buttons, hover effects, and modern card-based sections.", image: "images/css-assignment-5.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-5", liveLink: "https://shariq-css-assignment-5.vercel.app", featured: false },
    { title: "Profile Card", description: "A responsive profile card component with circular profile images, social media icons, hover effects, and clean card styling.", image: "images/css-assignment-6.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-6", liveLink: "https://shariq-css-assignment-6.vercel.app", featured: false },
    { title: "Apple Store Landing Page", description: "An Apple Store landing page concept built with HTML and CSS, featuring responsive layouts, custom typography, and modern product cards.", image: "images/css-assignment-7.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-7", liveLink: "https://shariq-css-assignment-7.vercel.app", featured: false },
    { title: "Facebook Login Page Clone", description: "A responsive Facebook login page clone with custom form styling, responsive layouts, and a clean user interface.", image: "images/css-assignment-9.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-9", liveLink: "https://shariq-css-assignment-9.vercel.app", featured: false },
    { title: "Saylani Welfare Clone", description: "A responsive Saylani Welfare landing page clone featuring donation sections, responsive grids, banner overlays, and structured content layouts.", image: "images/css-assignment-10.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-10", liveLink: "https://shariq-css-assignment-10.vercel.app", featured: false },
    { title: "Facebook Signup Page Clone", description: "A responsive Facebook Login & Signup Page clone featuring clean form layouts, responsive design, and modern UI styling.", image: "images/css-assignment-12.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-12", liveLink: "https://shariq-css-assignment-12.vercel.app", featured: false },
    { title: "Bootstrap E-Commerce Store", description: "A Bootstrap-powered e-commerce website featuring responsive navigation, carousel sliders, product cards, and interactive hover effects.", image: "images/css-assignment-13.png", technologies: ["HTML", "CSS", "Bootstrap"], githubLink: "https://github.com/shariq-ali-30/css-assignment-13", liveLink: "https://shariq-css-assignment-13.vercel.app", featured: false },
    { title: "Facebook Clone", description: "A responsive Facebook clone featuring user authentication, account registration, a dashboard, post creation with image previews, and JavaScript-powered interactions.", image: "images/css-assignment-14.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/css-assignment-14", liveLink: "https://shariq-css-assignment-14.vercel.app", featured: true },
    { title: "Upwork Clone", description: "A responsive Upwork landing page clone built with HTML and CSS, featuring modern layouts, pricing sections, responsive grids, and interactive UI elements.", image: "images/css-assignment-15.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-15", liveLink: "https://shariq-css-assignment-15.vercel.app", featured: false },
    { title: "LinkedIn Clone", description: "A responsive LinkedIn clone featuring sign-in, sign-up, and dashboard pages with reusable components and mobile-friendly layouts.", image: "images/css-assignment-16.png", technologies: ["HTML", "CSS"], githubLink: "https://github.com/shariq-ali-30/css-assignment-16", liveLink: "https://shariq-css-assignment-16.vercel.app", featured: false },
    { title: "Salt'n Pepper Restaurant Clone", description: "A fully responsive clone of the Salt'n Pepper Restaurant website built with HTML, CSS, and Bootstrap. Features responsive navigation, franchise sections, modern layouts, and mobile-friendly design.", image: "images/html-css-hackathon.png", technologies: ["HTML", "CSS", "Bootstrap"], githubLink: "https://github.com/shariq-ali-30/html-css-hackathon", liveLink: "https://shariq-html-css-hackathon.vercel.app", featured: false },
    { title: "Random Password Generator", description: "A responsive password generator that creates secure random passwords using JavaScript with a clean and user-friendly interface.", image: "images/password-generator.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/random-password-generator", liveLink: "https://shariq-random-password-generator.vercel.app", featured: false },
    { title: "Background Color Flipper", description: "An interactive background color generator that dynamically changes page colors using JavaScript while updating text styles for better contrast.", image: "images/background-flipper.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/background-flipper", liveLink: "https://shariq-background-flipper.vercel.app", featured: false },
    { title: "Student ID Card Generator", description: "A responsive student ID card generator featuring form validation, image upload preview, automatic roll number generation, and SweetAlert2 notifications.", image: "images/id-card-generator.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/student-id-card-generator", liveLink: "https://shariq-student-id-card-generator.vercel.app", featured: false },
    { title: "Profile Card Slider", description: "A responsive profile card slider built with JavaScript, featuring dynamic profile rendering, navigation controls, and smooth user interactions.", image: "images/profile-card-slider.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/profile-card-slider", liveLink: "https://shariq-profile-card-slider.vercel.app", featured: false },
    { title: "Todo List Application", description: "A responsive Todo List application with CRUD functionality, localStorage persistence, duplicate task prevention, and Light/Dark theme support.", image: "images/todo-list-app.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/todo-list-app", liveLink: "https://shariq-todo-list-app.vercel.app", featured: true },
    { title: "Restaurant Menu Application", description: "A responsive restaurant menu application with category filtering, live search, smooth scrolling, dynamic rendering, and localStorage-based theme persistence.", image: "images/restaurant-menu-application.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/restaurant-menu-application", liveLink: "https://shariq-restaurant-menu-application.vercel.app", featured: true },
    { title: "Personal Portfolio", description: "A modern and responsive personal portfolio showcasing my skills, projects, contact information with smooth navigation, dynamic project rendering, and a clean interface.", image: "images/portfolio.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/portfolio", liveLink: "https://shariq-ali.vercel.app", featured: true },
    { title: "MaintainIQ - Asset Maintenance Management System", description: "A modern asset maintenance platform for tracking assets, managing maintenance issues, monitoring equipment status, and streamlining maintenance workflows through an intuitive dashboard.", image: "images/maintainiq.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/maintainiq-hackathon-task", liveLink: "https://shariq-maintainiq.vercel.app", featured: true },
    { title: "Posts Explorer App", description: "A modern post explorer app for browsing posts, searching content, viewing post details, and exploring data through a clean and interactive interface.", image: "images/posts-explorer-app.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/Posts-Explorer-App", liveLink: "https://shariq-posts-explorer-app.vercel.app", featured: false },
    { title: "Recipe Explorer App", description: "A modern recipe explorer app for discovering recipes, searching meals, viewing recipe details, and exploring cuisines through a clean interface.", image: "images/recipe-explorer-app.png", technologies: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/shariq-ali-30/Recipe-Explorer-App", liveLink: "https://shariq-recipe-explorer-app.vercel.app", featured: true }
]
projects.reverse()

function displayProjects(projectsArr, projectsParent) {
    projectsArr.forEach(project => {
        let projectHTML = document.createElement("div")
        projectHTML.classList.add("project-card")

        let techBadges = project.technologies.map(tech => {
            return `<span class="${tech.toLowerCase()}">${tech}</span>`
        }).join("")

        projectHTML.innerHTML = `<div class="project-card-image">
                                <img src=${project.image}>
                            </div>
                            <div class="project-card-info">
                                <h2 class="project-title" title="${project.title}">${project.title}</h2>
                            <p class="project-description">${project.description}</p>
                            <div class="tech-badges">
                                ${techBadges}
                            </div>
                            <div class="project-card-footer">
                                <div class="hr-x"></div>
                                <div class="links">
                                    <a href=${project.githubLink} target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
                                    <div class="hr-y"></div>
                                    <a href=${project.liveLink} target="_blank"><i class="fa-solid fa-globe"></i> Live Demo</a>
                                </div>
                            </div>
                            </div>`
        projectsParent.appendChild(projectHTML)
    })
}
displayProjects(projects, allProjectsParent)

let featuredProjects = projects.filter(project => project.featured == true)
displayProjects(featuredProjects, featuredProjectsParent)

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
    }, 650);
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

contactMeCta.addEventListener("click", () => window.scrollTo({ top: contactSection.offsetTop - 120 }))