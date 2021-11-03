import React from "react";

// Import React dom
import { Link } from "react-router-dom";

// Importing bootstrap styles
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          Badjatya
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link" href="#">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-link" href="#">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
