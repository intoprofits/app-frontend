// variables
let menuDrawer = document.querySelector('.main-mobile-menu'),
    menu = document.querySelector('.mobile .menu'),
    siteLink = window.document.location.href,
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

function useDomainLink() {
    [].forEach.call(document.querySelectorAll('.links a'), function(e) { 
        let origlink = e.getAttribute('href')
        e.setAttribute('href', siteLink + origlink)
     
     });
}

function getContents() {
    document.addEventListener('click', function(e) {
		if ( e.target.matches('.links a') ) {
            e.preventDefault()
            let link = e.target.pathname;

            [].forEach.call(document.querySelectorAll('.links a'), function(e) { 
                e.classList.remove('active')
            });

            e.target.classList.add('active')

            fetch(link)
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    document.querySelector("div.container").innerHTML = data;
                    console.log('tae')
                });
		}
	})
}


// call functions
useDomainLink()
mobileMenu()
getContents()