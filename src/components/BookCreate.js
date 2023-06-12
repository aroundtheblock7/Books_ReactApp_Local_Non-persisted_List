import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    //handleChange is called whenever user changes text in input in any way
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    //Here we need a function so when user submits form via button or enter...
    //...we want to pass in title we've been maintaing in our state system.
    //This needs to get passed pack up to parent (App) via our onCreate prop
    //We need to pass in title to onCreate, that is entire point- to get title back up
    //Remeber we want to clear the text by setting setTitle to empty string
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    //Anytime we use an input element we need to wire up the value prop and onChange prop
    //...this means we need state to keep track of what user types in the input
    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;