// variables
let menuDrawer = document.querySelector('.main-mobile-menu'),
    sideMenuDrawer = document.querySelector('.side-mobile-menu'),
    menu = document.querySelector('.main-menu'),
    sideMenu = document.querySelector('.side-menu');

// functions
function menuAndnav() {
	menuDrawer.addEventListener('click', function() {
        menu.classList.toggle('hidden')
    })
    sideMenuDrawer.addEventListener('click', function() {
        sideMenu.classList.toggle('hidden')
	})
}

function checkWindowSize() {
    if (window.innerWidth < 960) {
        menu.classList.add('hidden')
        sideMenu.classList.add('hidden')
    }
}

// call functions
menuAndnav()
checkWindowSize()