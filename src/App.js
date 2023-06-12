import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    //This function (handler) will be passed down via props to...
    //...BookList => BookShow => BookEdit
    //To find the book we need in our books array we use a mappping
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        });
        setBooks(updatedBooks);
    };


    //To remove something out of an array we use the filter function
    //Filter is true. If we return false we don't want it.
    //This function will get passed down to BookList and BookShow via props
     const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
     };

    //Going to pass this function down to the BookCreate component
    //When user calls this from the BookCreate we'll need to pass in all the current books
    //...as well as the new book object with its properties.
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            { 
              id: Math.round(Math.random() * 9999),
              title: title
            }
        ]
        setBooks(updatedBooks);
    };

    //Note BookList doesn't need a function to pass down the books. We are updating
    //... the 'books' array via state and the BookCreate component. Once we do that
    //... books is already updated, and we simply just pass it down to BookList.
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} onDelete={deleteBookById} books={books}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;