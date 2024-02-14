import react from "react";
import { NavLink } from "react-router-dom";
import "./LoginStyle.css";
import Nav from "../Nav/Nav";
function Login() {
  return (
    <div className="main">
      {/* <div className="navbar">
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
      </div> */}
      <Nav />
      <div className="content">
        <h1>
          <span>
            Ethio Tour &amp; <br />& Travel
          </span>{" "}
          PLC
        </h1>
        <p className="par">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
          expedita atque eveniet <br /> quis nesciunt. Quos nulla vero
          consequuntur, fugit nemo ad delectus
          <br /> a quae totam ipsa illum minus laudantium?
        </p>

        <button className="cn">
          <a href="#">JOIN US</a>
        </button>

        <div className="form">
          <h2>Login Here</h2>
          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <a
            className="btnn"
            href="./r/registration.html"
            style={{
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "30px",
            }}>
            Login
          </a>

          <p className="link">
            Don't have an account
            <br />
            <a href="#">Sign up </a> here
          </p>

          <div className="icons">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-skype"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
