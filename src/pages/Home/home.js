import './home.css';
import AddBook from '../../components/AddBook/addbook';
import BookList from '../../components/BookList/booklist';

const Home = () => (
  <>
    <div>
      <BookList />
      <AddBook />
    </div>
  </>
);

export default Home;
