const books = [
    {
        title: "Livro 1",
        synopsis: "Sinopse do livro 1",
        author: "Autor 1",
        category: "Categoria 1",
        publicationDate: "01/01/2023",
        image: "assets/images/book1.jpg",
        link: "livro1.html"
    },
    {
        title: "Livro 2",
        synopsis: "Sinopse do livro 2",
        author: "Autor 2",
        category: "Categoria 2",
        publicationDate: "01/02/2023",
        image: "assets/images/book2.jpg",
        link: "livro2.html"
    },
    {
        title: "Livro 3",
        synopsis: "Sinopse do livro 3",
        author: "Autor 3",
        category: "Categoria 3",
        publicationDate: "01/03/2023",
        image: "assets/images/book3.jpg",
        link: "livro3.html"
    },
    {
        title: "Livro 4",
        synopsis: "Sinopse do livro 4",
        author: "Autor 4",
        category: "Categoria 4",
        publicationDate: "01/04/2025",
        image: "assets/images/book4.jpg",
        link: "livro4.html"
    },
    {
        title: "Livro 5",
        synopsis: "Sinopse do livro 5",
        author: "Autor 5",
        category: "Categoria 5",
        publicationDate: "01/05/2023",
        image: "assets/images/book5.jpg",
        link: "livro5.html"
    },
    {
        title: "Livro 6",
        synopsis: "Sinopse do livro 6",
        author: "Autor 6",
        category: "Categoria 6",
        publicationDate: "01/06/2023",
        image: "assets/images/book6.jpg",
        link: "livro6.html"
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const recentBooksSection = document.getElementById('recent-books');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.onclick = () => window.location.href = book.link;

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-synopsis">${book.synopsis}</div>
                <div class="book-details">
                    <div>Autor: ${book.author}</div>
                    <div>Categoria: ${book.category}</div>
                    <div>Data de Publicação: ${book.publicationDate}</div>
                </div>
            </div>
        `;

        recentBooksSection.appendChild(bookCard);
    });
});
