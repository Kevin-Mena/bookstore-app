import { useState } from "react";
import "./home.css";
import AddBook from "../../components/AddBook/addbook";
import BookList from "../../components/BookList/booklist";

const Home = () => {
  const [lists, setLists] = useState([]);

  return (
    <>
      <div>
        <p>ADD NEW BOOK</p>
        <AddBook setList={setLists} />
        <BookList lists={lists} />
      </div>
    </>
  );
};

export default Home;
