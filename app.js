// variables
let menuDrawer = document.querySelector('.main-mobile-menu'),
    mobileMenu = document.querySelector('.mobile-menu .menu'),
    innerModal = document.querySelector('.modal-contents'),
    loadingBar = document.querySelector('.loading-bar'),
    modal = document.querySelector('.modal.active');
    

// functions
const showMenu = () => {
    mobileMenu.classList.toggle('show');
}

const learnMore = () => {
    document.querySelector('#learnMoreModal').classList.add('active') 
}

const closeModal = () => {
    [].forEach.call(document.querySelectorAll('.modal'), function(e) {
        e.classList.remove('active'); 
    })
}

const addItemModal = () => {
    document.querySelector('#modalItem').classList.toggle('active');
}


const toggleLoading = () => {
    document.querySelector('.loading-bar').classList.toggle('active') 
}

// function openModal() {
//     [].forEach.call(document.querySelectorAll('a.modal'), function(e) { 
// 		e.addEventListener('click', function(e) {
//             e.preventDefault()
            

//             let content = e.target.attributes.content.value

//             innerModal.innerHTML = content
//             modal.classList.add('active')
            
// 		})
//     });
    
//     closeModal.addEventListener('click', function(e) {
//         e.preventDefault()

//         modal.classList.remove('active')
//     });
// }


// call functions
// mobileMenu()
// openModal()