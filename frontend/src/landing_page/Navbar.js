import React from "react";
import { Link } from "react-router-dom";
import "./navbar-footer.css";

const Navbar = () => {
  return (
    <header className="tl-navbar">
      <div className="tl-navbar-container">

        <Link to="/" className="tl-navbar-logo">
          <span className="tl-navbar-logo-mark">T</span>
          <span className="tl-navbar-logo-text">TradeLogix</span>
        </Link>

        <nav>
          <ul className="tl-navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>

            <li>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>

        <div className="tl-navbar-actions">
          <Link to="/login" className="tl-navbar-login">
            Login
          </Link>

          <Link to="/signup" className="tl-navbar-signup">
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="tl-navbar-menu"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;