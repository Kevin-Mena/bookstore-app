import React from "react";
import Books from "../Books/Books";
import PropTypes from "prop-types";

const BookList = (props) => {
  const { lists } = props;
  BookList.propTypes = {
    lists: PropTypes.arrayOf.isRequired,
  };
  return (
    <ul>
      {lists.map((list) => (
        <Books book={list} key={list.id} />
      ))}
    </ul>
  );
};

export default BookList;
