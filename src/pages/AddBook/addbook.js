import { v4 as uuid } from "uuid";
const AddBook = ({ setList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const id = unique_id.slice(0, 4);
    const name = e.target.title.value;
    const author = e.target.author.value;
    const newList = {
      id,
      name,
      author,
    };
    if (!name || !author) {
      return;
    }
    setList((oldList) => {
      return oldList.concat(newList);
    });
    e.target.reset();
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
