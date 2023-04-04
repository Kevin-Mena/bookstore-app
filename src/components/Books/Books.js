import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/booksSlice';

const Books = ({ id, title, author }) => {
  const dispatch = useDispatch();
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

        <button
          type="button"
          className="remove"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
      </ul>
    </div>
  );
};

export default Books;
