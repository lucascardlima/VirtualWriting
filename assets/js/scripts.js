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

// Scripts da sessão livros recentes
document.addEventListener("DOMContentLoaded", function() {
    const bookRow = document.getElementById("bookRow");

    books.forEach((book, index) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-6");

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const bookContent = `
            <img src="assets/images/${book.coverImage}" alt="${book.title}">
            <div class="book-details">
                <h2>${book.title}</h2>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Categoria:</strong> ${book.category}</p>
                <p>${book.synopsis}</p>
            </div>
        `;
        bookDiv.innerHTML = bookContent;

        colDiv.appendChild(bookDiv);

        if (index % 2 === 0) {
            bookRow.appendChild(document.createElement("div")).classList.add("row");
        }

        bookRow.lastElementChild.appendChild(colDiv);
    });
});
