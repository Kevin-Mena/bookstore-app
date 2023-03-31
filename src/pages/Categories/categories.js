import { Link } from 'react-router-dom';
import './categories.css';

const Categories = () => (
  <div className="main">
    <button type="button" className="btn-status">
      check status
    </button>
    <Link to="/">back home</Link>
  </div>
);

export default Categories;
