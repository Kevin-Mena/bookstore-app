import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../Books/Books';

const BookList = () => {
  const { bookItems } = useSelector((store) => store.book);

  return (
    <ul>
      {bookItems.map((book) => (
        <Books
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </ul>
  );
};

export default BookList;
