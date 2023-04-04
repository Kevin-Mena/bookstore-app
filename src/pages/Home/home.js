import './home.css';
import AddBook from '../../components/AddBook/addbook';
import BookList from '../../components/BookList/booklist';

const Home = () => (
  <>
    <div>
      <p>ADD NEW BOOK</p>
      <AddBook />
      <BookList />
    </div>
  </>
);

export default Home;
