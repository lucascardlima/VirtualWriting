// Script da NavBar
document.addEventListener('DOMContentLoaded', function () {
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

    dropdownSubmenus.forEach(function (submenu) {
        submenu.addEventListener('mouseEnter', function () {
            var submenuDropdown = submenu.querySelector('.dropdown-menu');
            submenuDropdown.classList.add('show');
        });

        submenu.addEventListener('mouseLeave', function () {
            var submenuDropdown = submenu.querySelector('.dropdown-menu');
            submenuDropdown.classList.remove('show');
        });
    });
});

/* SCRIPTS DO CARROSSEL */

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('carousel-track');

    books.forEach(book => {
        const bookItem = document.createElement('li');

        const bookLink = document.createElement('a');
        bookLink.href = book.link;

        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;

        bookLink.appendChild(bookImage);
        bookItem.appendChild(bookLink);
        track.appendChild(bookItem);
    });

    updateCarousel();
    setInterval(nextSlide, 6000); // Avança automaticamente a cada 6 segundos
});

let currentSlide = 0;
const slidesToShow = 4; // Número de livros para mostrar por vez
const track = document.getElementById('carousel-track');
const totalSlides = books.length;

function updateCarousel() {
    const slideWidth = track.children[0].offsetWidth + 20; // 20 é a margem entre slides
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - slidesToShow;
    }
    updateCarousel();
}

function nextSlide() {
    if (currentSlide < totalSlides - slidesToShow) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
}

// SCRIPTS PAGINA ESCREVER //

function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})


const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function () {
	showCode.dataset.active = !active;
	active = !active
	if(active) {
		content.textContent = content.innerHTML;
		content.setAttribute('contenteditable', false);
	} else {
		content.innerHTML = content.textContent;
		content.setAttribute('contenteditable', true);
	}
})



const filename = document.getElementById('filename');

function fileHandle(value) {
	if(value === 'new') {
		content.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}
