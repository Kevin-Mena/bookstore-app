import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from '../Books/Books';
import { fetchBooks } from '../../features/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((store) => store.book);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...Please Wait!</h1>
      </div>
    );
  }

  return (
    <>
      {bookItems.map((book) => (
        <Books
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
    </>
  );
};

export default BookList;
