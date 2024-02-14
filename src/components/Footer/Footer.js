import react from "react";
import "./FooterStyle.css";
import pack1 from "../image/package-1.jpg";
import pack2 from "../image/package-2.jpg";
import pack3 from "../image/package-3.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div class="top-section">
          <section class="about-section">
            <p class="logo">LOGO HERE</p>
            <section>
              <h3>About Us</h3>
              <p>If you want to know about Vidyasheela visit vidyasheela.com</p>
            </section>
            <section>
              <h3>Contact Us</h3>
              <p>+91 0000 000 000</p>
              <p>companyemail@email.com</p>
            </section>
          </section>
          <section class="info-section">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </section>
          <section class="links-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terns & Condition</a>
              </li>
            </ul>
          </section>
          <section class="subscribe-section">
            <h3>Subscribe Us</h3>
            <form action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </section>
        </div>
        <hr />
        <div class="social-icons">
          <a href="facebook">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="twitter">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="instagram">
            <i class="fab fa-instagram-square"></i>
          </a>
          <a href="youtube">
            <i class="fab fa-youtube-square"></i>
          </a>
        </div>
        <span> CopyRight &copy; website.com 2022</span>
      </footer>
    </div>
  );
}

export default Footer;
