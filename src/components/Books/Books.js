import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../features/books/booksSlice';

const Books = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteBook(id));
  };

  Books.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };

  return (
    <div>
      <ul>
        <li>
          Title:
          {title}
        </li>

        <li>
          Author:
          {author}
        </li>
        <button type="button">Comment</button>
        <button type="button" className="remove" onClick={deleteHandler}>
          Remove
        </button>
        <button type="button">Edit</button>
      </ul>
    </div>
  );
};

export default Books;
