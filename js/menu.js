const btnMenu = document.getElementById("handle-menu");
const navbar = document.querySelector(".navbar");

let menuIsOpen = false;

const closeMenu = () => {
    btnMenu.classList.remove("bx-left-arrow-alt")
    btnMenu.classList.add("bx-grid-small")
    navbar.classList.remove("active")
    
    menuIsOpen = false
}

const openMenu = () => {
    btnMenu.classList.remove("bx-grid-small")
    btnMenu.classList.add("bx-left-arrow-alt")
    navbar.classList.add("active")

    menuIsOpen = true;
}



btnMenu.addEventListener("click", (e) => {
    if(!menuIsOpen) {
       openMenu()
       return
    }
    closeMenu()
})

navbar.addEventListener("click", (e) => {
    if(e.target.tagName == "A") {
        closeMenu()
    }
})