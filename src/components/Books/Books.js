import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { book } = props;
  Books.propTypes = {
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };
  const [books, setBooks] = useState([book]);

  const handleRemove = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <ul key={book.id}>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <button
              type="button"
              className="rem"
              onClick={() => handleRemove(book.id)}
            >
              Remove
            </button>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Books;
