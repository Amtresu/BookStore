import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/book';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    dispatch(addBook(id, title, author));
  };
  return (
    <div>
      <form>
        <input type="text" className="title" placeholder="Title" />
        <input type="text" className="author" placeholder="Author" />
        <button onClick={handleEvent} type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBookForm;