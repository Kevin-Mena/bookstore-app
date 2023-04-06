import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { createBook } from '../../features/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuid().slice(0, 4),
      title,
      author,
      category: null,
    };
    dispatch(createBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="form-title">ADD NEW BOOK</p>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
      />
      <input
        type="text"
        name="author"
        className="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Book author"
      />
      <button type="submit" className="btn-submit" id="btn-add">
        <p className="btn-info">ADD BOOK</p>
      </button>
    </form>
  );
};

export default AddBook;
