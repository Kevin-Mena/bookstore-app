import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../../features/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Books = ({ id, title, author }) => {
  const [lessonProgress, setlessonProgress] = useState(64);
  const [IsUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (lessonProgress < 100 && IsUpdate) {
      setlessonProgress((prev) => prev + 2);
      setlessonProgress((prev) => {
        const updatedValue = prev + 2;
        return updatedValue;
      });
    }
  }, [lessonProgress, IsUpdate]);

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
    <>
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
        <div className="progress">
          <div style={{ width: 90, height: 100 }}>
            <CircularProgressbar value={lessonProgress} />
          </div>
          <div>
            <p className="percentage-complete">{`${lessonProgress}%`}</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapters">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="current-lesson">Chapter 17</p>
          <button
            type="button"
            className="btn-progress"
            onClick={() => setIsUpdate(true)}
          >
            <p className="btn-text">UPDATE PROGRESS</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;
