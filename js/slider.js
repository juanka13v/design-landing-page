const btnRight = document.querySelector(".btn-slider-right");
const btnLeft = document.querySelector(".btn-slider-left");
const slider = document.querySelector(".slider-container");

let viewportWidth = window.innerWidth;
let slideWidth = 33;
let slide = 0;

const handleSlideWidth = (width) => {
    if(width > 768) {
        slideWidth = 33.33;
    }

    if (width > 580 && width <= 768) {
        slideWidth = 50;
    }

    if(width <= 580) {
        slideWidth = 100;
    }
}

const handleDisableClass = () => {
    // Left
    if (slide < 1) {
        btnLeft.classList.add("disable");
    }

    if(slide >= 1) {
        btnLeft.classList.remove("disable")
    }

    // Right

    if(slide >= 3 && viewportWidth >= 768) {
        btnRight.classList.add("disable");
    }

    if(slide < 3 && viewportWidth >= 768) {
        btnRight.classList.remove("disable")
        return
    }

    
    
    if(slide >= 4 && viewportWidth >= 580) {
        btnRight.classList.add("disable");
    }

    if(slide < 4 && viewportWidth >= 580 && viewportWidth <= 768) {
        btnRight.classList.remove("disable")
        return
    }

  
    
    if(slide >= 5) {
        btnRight.classList.add("disable");
    }

    if(slide < 5 && viewportWidth < 580) {
        btnRight.classList.remove("disable");
    }
    
}


window.addEventListener("DOMContentLoaded", (e) => {
    viewportWidth = window.innerWidth;
    handleSlideWidth(viewportWidth)
    handleDisableClass()
})

window.addEventListener("resize", (e) => {
    viewportWidth = window.innerWidth;
    handleSlideWidth(viewportWidth);
    handleDisableClass()
    slide = 0;  
    slider.style.transform = "translateX(0%)";
})

const moveLeft = () => {
    if(slide < 1) {
        return
    } 
    slide--
    let move = slideWidth * slide
    slider.style.transform = `translateX(-${move}%)`;
}

const moveRight = () => {
    if(slide >= 3 && viewportWidth >= 768) {
        return
    }
    
    if(slide >= 4 && viewportWidth >= 580) {
        return
    }
    
    if(slide >= 5) {
        return
    }
    slide++
    let move = slideWidth * slide
    slider.style.transform = `translateX(-${move}%)`;
}


btnLeft.addEventListener("click", (e) => {
    moveLeft()
    handleDisableClass()
})

btnRight.addEventListener("click", (e) => {
    moveRight()
    handleDisableClass()
})
