// variables
let menuDrawer = document.querySelector('.main-mobile-menu'),
    menu = document.querySelector('.mobile .menu'),
    menuItem = document.querySelector('a.haschild');

// functions
function mobileMenu() {
	menuDrawer.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('show')
    });

    [].forEach.call(document.querySelectorAll('a.haschild'), function(e) { 
		e.addEventListener('click', function(e) {
			e.preventDefault()

            this.nextElementSibling.classList.toggle('show')
            
		})
	});
}


// call functions
mobileMenu()