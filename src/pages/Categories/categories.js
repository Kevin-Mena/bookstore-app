import { Link } from "react-router-dom";
import "./categories.css";
import { useState } from "react";

const Categories = () => {
  const [checkStatus, setcheckStatus] = useState(false);
  return (
    <div className="main">
      <button
        type="button"
        className="btn-status"
        onClick={() => setcheckStatus(true)}
      >
        <p className="btn-info">CHECK STATUS</p>
      </button>
      {checkStatus && <h1 className="dev-status">Under Construction...!</h1>}
      <Link to="/" className="back-home">
        BACK HOME
      </Link>
    </div>
  );
};

export default Categories;
