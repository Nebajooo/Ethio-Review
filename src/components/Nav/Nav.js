import react from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">Ethio Review</h2>
        </div>

        <div className="menu">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICE</a>
            </li>
            <li>
              <a href="#">DESIGN</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="search">
          <input
            className="srch"
            type="search"
            name=""
            placeholder="Type To text"
          />
          <a href="#">
            <button className="btn">Search</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
