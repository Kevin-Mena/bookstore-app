import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../features/books/booksSlice";

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
      <div className="book-container">
        <div className="details">
          <li className="book-title">{title}</li>
          <li className="book-author">{author}</li>
          <div className="btn-group">
            <button type="button" className="btn-comment">
              Comment
            </button>
            <button
              type="button"
              className="btn-remove"
              onClick={deleteHandler}
            >
              Remove
            </button>
            <button type="button" className="btn-edit">
              Edit
            </button>
          </div>
        </div>
        <div className="progress"></div>
      </div>
      <div className="chapters">
        <h1>bla</h1>
      </div>
    </div>
  );
};

export default Books;
