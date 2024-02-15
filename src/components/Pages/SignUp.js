import React from "react";
import "../../App.css";
import "./SignUp.css";
import { NavLink, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function SignUp() {
  return (
    <div>
      <div class="main"></div>
      <div class="form-box">
        <form class="form">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
          <div class="form-container">
            <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div class="form-section">
          <p>
            Have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
