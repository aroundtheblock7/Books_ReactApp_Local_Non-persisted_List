import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {
//We are receiving the books prop from App but now we need to map over the books
//...before we display all of them in our BookShow component. By mapping it allows
//...us to display a BookShow component for each book in the array.
  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
   });

  return (
    <div className="book-list">{renderedBooks}</div>
  )
}

export default BookList;