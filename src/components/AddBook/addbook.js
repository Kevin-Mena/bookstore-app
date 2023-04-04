import { useDispatch } from 'react-redux';
import { handleSubmit } from '../../features/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      handleSubmit({
        title: event.target.title.value,
        author: event.target.author.value,
      }),
    );
    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Book author" />
      <button type="submit" className="btn-submit">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
