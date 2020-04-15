// variables
let menuDrawer = document.querySelector('.main-mobile-menu'),
    menu = document.querySelector('.mobile .menu'),
    menuItem = document.querySelector('a.haschild'),
    closeModal = document.querySelector('a.closeModal'),
    innerModal = document.querySelector('.modal-contents'),
    modal = document.querySelector('#modal');

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


function openModal() {
    [].forEach.call(document.querySelectorAll('a.modal'), function(e) { 
		e.addEventListener('click', function(e) {
            e.preventDefault()
            

            let content = e.target.attributes.content.value

            innerModal.innerHTML = content
            modal.classList.add('active')
            
		})
    });
    
    closeModal.addEventListener('click', function(e) {
        e.preventDefault()

        modal.classList.remove('active')
    });
}


// call functions
mobileMenu()
openModal()