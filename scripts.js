let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(title + " by " + author + ", " + pages + " pages, " + read);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read')

theHobbit.info()

addBookToLibrary(theHobbit);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
}