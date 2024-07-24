document.querySelector('.topnav_middle_menu').addEventListener('click', function (e) {
    console.log(e.target)
})

function open_menu(id) {
    let clicked = document.getElementById(`drop-menu-${id}`);
    let back = document.getElementById('header_dropdown_bg_img');

    if (clicked.style.display == 'block') {
        back.classList.toggle('none')
        // document.getElementById('drop-menu-item').style.height='229px'
        back.style.display = 'none';
        display_none()
    }
    else {
        display_none()
        back.style.display = 'block';
        clicked.style.display = 'block';

    }
}

function display_none() {

    document.getElementById('drop-menu-1').style.display = 'none';
    document.getElementById('drop-menu-2').style.display = 'none';
    document.getElementById('drop-menu-3').style.display = 'none';
}


const showMenu = (toggledId, navId) => {
    const toggle = document.getElementById(toggledId)

    const nav = document.getElementById(navId)
    let body= document.getElementById('page-body')
    toggle.addEventListener('click', () => {
        nav.classList.toggle('opacity-0')
        nav.classList.toggle('show_menu')
        toggle.classList.toggle('show_icon')
        document.getElementById('nav__close').classList.toggle('nav__close__opacity-0')
        document.getElementById('nav__burger').classList.toggle('nav__close__opacity-0')
       body.classList.toggle('none')
       
        // if (body.style.display == 'block') {
        //     body.style.display = 'none';
        // }
        // else {
        //     body.style.display = 'block';
        // }

    })
}
showMenu('header_menu-button', 'topnav_middle_menu')