import { useState } from 'react';
import BookEdit from "./BookEdit";
//We are passing down OnDelete from App => Book List => to here (BookShow)
//We need a button for onDelete, so user can click and get rid of it
//We can't call onDelete directly, we need to create a function that calls it because we
//...need to get the id from it. id is being passed with it so we know what book to delete

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  }
  
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  //Here is where we assing a var to either the "title" of the BookEdit component
  //By default we show book title, but if showEdit is true display BookEdit component
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

  //We want to show either the Title or the Book edit component. 
  //By default we want to show tilte, when user clicks on Pencil icon we want to show BookEdit
  //We import BookEdit component at top
  return (
    <div className="book-show">
      <img 
        alt="books" 
        src={`https://picsum.photos/seed/${book.id}300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
            Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
            Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow;