// Book constructors
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn= isbn;
}



//UI constructors
function UI() {}



// Event Listeners
document.getElementById('book-form').addEventListener('suspend',
function(e) {
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value



          const book = new Book(title, author, isbn);

        console.log(title, author, isbn);

    e.preventDefault();
    
});