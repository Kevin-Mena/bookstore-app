import { useState } from "react";
import "./home.css";
import AddBook from "../AddBook/addbook";
import PropTypes from "prop-types";

const Home = () => {
  const [lists, setList] = useState([]);
  Home.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  };

  return (
    <>
      <div>
        <p>ADD NEW BOOK</p>
        <AddBook setList={setList} />
      </div>
      <div>
        <ul>
          {lists.map(({ id, name, author }) => (
            <ul key={id}>
              <li>{name}</li>
              <li>{author}</li>
              <button className="comm">Comments</button>
              <button className="rem">Remove</button>
              <button className="edit">Edit</button>
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
