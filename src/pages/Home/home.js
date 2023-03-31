import { useState } from 'react';
import './home.css';
import AddBook from '../AddBook/addbook';

const Home = () => {
  const [lists, setLists] = useState([]);

  return (
    <>
      <div>
        <p>ADD NEW BOOK</p>
        <AddBook setList={setLists} />
      </div>
      <div>
        <ul>
          {lists.map(({ id, name, author }) => (
            <ul key={id}>
              <li>{name}</li>
              <li>{author}</li>
              <button type="button" className="comm">
                Comments
              </button>
              <button type="button" className="rem">
                Remove
              </button>
              <button type="button" className="edit">
                Edit
              </button>
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
