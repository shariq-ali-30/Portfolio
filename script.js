let navLinks = document.querySelector(".nav-links").children

function activeLinkHandler () {
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].children[0].classList.remove("active")
    }
    this.children[0].classList.add("active")
        
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", activeLinkHandler)
}