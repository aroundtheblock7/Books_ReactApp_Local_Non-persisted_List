import { useState } from 'react';

//We'll need the title so we can set piece of state to display the title...
//...as a default even when the Edit icon is clicked.
//Keep in mind it is not the input form that controls what the default value
//... is, it is the state system. So we do.. useState(book.title)
//{book} is a prop gettng passed down from BookShow 
function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    //Even after setting this up to pass change the new title we need to
    //...toggle the form to go back to showing the title (not BookEdit) after user his "Save"
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title)
    };
    
//Anytime we use an input element we need to keep track of that input
//...elements value using the state system. 
//With forms we can use onSubmit that allows to hit Enter or button click to submit it
    return (
        <form onSubmit={handleSubmit} className='book-edit'>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;