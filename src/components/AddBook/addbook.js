import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const AddBook = ({ setList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueID = uuid();
    const id = uniqueID.slice(0, 4);
    const title = e.target.title.value;
    const author = e.target.author.value;
    const newList = {
      id,
      title,
      author,
    };

    if (!title || !author) {
      return;
    }
    setList((oldList) => oldList.concat(newList));
    e.target.reset();
  };

  AddBook.propTypes = {
    setList: PropTypes.func.isRequired,
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Book author" />
      <button type="submit" className="btn-submit">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
