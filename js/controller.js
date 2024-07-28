document.querySelector('.topnav_middle_menu').addEventListener('click', function (e) {
    console.log(e.target)
})

document.getElementById("arrow-link").addEventListener('click',function(e){
    document.querySelector(".cookies_block").style.display="none"
})
document.getElementById("button-menu_button").addEventListener('click',function(e){
    // dissapear.querySelector(".buttons-list").classList.remove('dissapear')
    document.querySelector(".buttons-list").classList.toggle('appear')
})


//handle show ul element
function open_menu(id) {
    let clicked = document.getElementById(`drop-menu-${id}`);
    let back = document.getElementById('header_dropdown_bg_img');
   
    if (clicked.style.display == 'block') {
        back.classList.toggle('none')
        back.style.display = 'none';
        clicked.style.display = 'none';
        display_none()
    }
    else {
        display_none()
        
        back.style.display = 'block';
        clicked.style.display = 'block';
        back.classList.remove("open")

    }
}
function display_none() {

    document.getElementById('drop-menu-1').style.display = 'none';
    document.getElementById('drop-menu-2').style.display = 'none';
    document.getElementById('drop-menu-3').style.display = 'none';
    document.getElementById('drop-menu-4').style.display = 'none';
    document.getElementById('drop-menu-5').style.display = 'none';
    document.getElementById('drop-menu-6').style.display = 'none';
}




//handle menu show
const showMenu = (toggledId, navId) => {
    const toggle = document.getElementById(toggledId)

    const nav = document.getElementById(navId)
    let body1 = document.getElementById('page-body-1')
    let body2 = document.getElementById('page-body-2')
    let body3 = document.getElementById('page-body-3')
    let body4 = document.getElementById('page-body-4')

    toggle.addEventListener('click', () => {
        nav.classList.toggle('opacity-0')
        nav.classList.toggle('show_menu')
        toggle.classList.toggle('show_icon')
        document.getElementById('nav__close').classList.toggle('nav__close__opacity-0')
        document.getElementById('nav__burger').classList.toggle('nav__close__opacity-0')
        body1.classList.toggle('none')
        body2.classList.toggle('none')
        body3.classList.toggle('none')
        body4.classList.toggle('none')

    })
}
showMenu('header_menu-button', 'topnav_middle_menu')





//handle slideshow

const initSlider = (e) => {
    const slidercomponent = document.getElementById(e)
    const slideButtons = slidercomponent.querySelectorAll(".slide-button");
    const imageList = slidercomponent.querySelector(".image-list");
    const slideScrollBar = slidercomponent.querySelector(".slider-scrollbar");
    const slideScrollThumb = slideScrollBar.querySelector(".scrollbar-thumb");
    const sliderWrapper=slidercomponent.querySelector(".slider-wrapper");
    
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    /////handle Thumb

    slideScrollThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = slideScrollThumb.offsetLeft;

        //handle mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = slideScrollBar.getBoundingClientRect().width - slideScrollThumb.offsetWidth
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft
            slideScrollThumb.style.left = `${boundedPosition}px`
            imageList.scrollLeft = scrollPosition
        }
        ///handle mous up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    })
   
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollBar.clientWidth - slideScrollThumb.offsetWidth)
        slideScrollThumb.style.left = `${thumbPosition}px`
    }

    //handle buttons click
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })

        })
    })

    //handle buttons appearance
    const handleSlideButtons = () => {
        const windowWidth = window.innerWidth;
        if(windowWidth >=767){
           slideButtons[0].style.display = "block";

        slideButtons[1].style.display = "block"; 
        }
 
        sliderWrapper.classList.remove("padding-47px")
        
    }

    //handle img slide move
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition()
    })



}
window.addEventListener('load', handleResize)
window.addEventListener("load", initSlider("slider-component-1"))
window.addEventListener("load", initSlider("slider-component-2"))
window.addEventListener("load", initSlider("slider-component-3"))
window.addEventListener('resize', handleResize)


function handleResize() {
    // const windowWidth = window.innerWidth;
    const slidercomponent = document.getElementById("slider-component-3")
    const slideScrollBar = slidercomponent.querySelector(".slider-scrollbar");

    const width = slideScrollBar.getBoundingClientRect().width;

    width == 1110 ? slideScrollBar.style.display = "none" : slideScrollBar.style.display = "block";

}





///////////////////////////////////////


